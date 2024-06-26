package com.Madhav.legalservicesproject.Controller;


import com.Madhav.legalservicesproject.Chat.MapperUtils;
import com.Madhav.legalservicesproject.Chat.WebSocketEventListener;
import com.Madhav.legalservicesproject.Model.Chatroom;
import com.Madhav.legalservicesproject.Model.Message;
import com.Madhav.legalservicesproject.Model.NotificationDto;
import com.Madhav.legalservicesproject.Repo.ChatroomRepository;
import com.Madhav.legalservicesproject.Repo.MessageRepository;
import com.Madhav.legalservicesproject.Repo.ProjectRepository;
import com.sun.jdi.InternalException;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

import java.util.Optional;

@Controller
@Slf4j
public class ChatController{
    @Autowired
    WebSocketEventListener auth;
    @Autowired
    private SimpMessageSendingOperations messagingTemplate;
    @Autowired
    private ProjectRepository projectRepository;
    @Autowired
    private ChatroomRepository chatroomRepository;
    @Autowired
    private MessageRepository messageRepository;
    @MessageMapping("/chat")
    public void sendMessage(Message message, SimpMessageHeaderAccessor accessor){
        Optional<Chatroom> chatroom = chatroomRepository.findChatroomBySenderIdAndRecipientId(message.getSenderId(),message.getRecipientId());
        String chatroomId = "";
        if(chatroom.isEmpty()){
            chatroomId = String.format("%s_%s",message.getSenderId(),message.getRecipientId());
            Chatroom senderRecipient = Chatroom.builder().
                    chatroomId(chatroomId).
                    senderId(message.getSenderId()).
                    recipientId(message.getRecipientId()).
                    build();
            Chatroom recipientSender = Chatroom.builder().
                    chatroomId(chatroomId).
                    senderId(message.getRecipientId()).
                    recipientId(message.getSenderId()).
                    build();
            try {
                chatroomRepository.save(senderRecipient);
                chatroomRepository.save(recipientSender);
            }
            catch (Exception e){
                e.printStackTrace();
                throw new InternalException("Cannot create a new chatroom between sender "+ message.getSenderId() +" and recipient "+message.getRecipientId());
            }
        }
        else {
            chatroomId = chatroom.get().getChatroomId();
        }
        message.setChatroomId(chatroomId);
        Message saved = null;
        try{
            saved = messageRepository.save(message);
        }
        catch(Exception e){
            throw new InternalException("Cannot create a new message in chatroomId "+ chatroomId);
        }
        NotificationDto notification = MapperUtils.mapperObject(saved,NotificationDto.class);
        messagingTemplate.convertAndSendToUser(message.getRecipientName(),"/queue/messages",notification);
    }
}