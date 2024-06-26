package com.Madhav.legalservicesproject.Controller;

import com.Madhav.legalservicesproject.ChatService.ChatroomService;
import com.Madhav.legalservicesproject.ChatService.MessageService;
import com.Madhav.legalservicesproject.Model.Chatroom;
import com.Madhav.legalservicesproject.Model.Message;
import com.sun.jdi.InternalException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/ws/messages")
public class MessageController{
    @Autowired
    private MessageService messageService;
    @Autowired
    private ChatroomService chatroomService;
    @GetMapping("/{senderId}/{recipientId}")
    public ResponseEntity<List<Message>> getChatMessages(@PathVariable String senderId,@PathVariable String recipientId){
        List<Message> messagesFromSenderRecipient = null;
        try{
            List<Message> messages = messageService.findChatMessagesFromSelectedUser(senderId,recipientId);
            messageService.updateMessagesStatusToDelivered(messages);
            Chatroom chatroom = chatroomService.findChatroomBySenderIdAndRecipientId(senderId,recipientId);
            if(chatroom != null){
                messagesFromSenderRecipient = messageService.findChatMessagesByChatroomId(chatroom.getChatroomId());
            }
        }
        catch(Exception e){
            e.printStackTrace();
            throw new InternalException("Cannot find messages between sender "+senderId+" and recipient "+recipientId);
        }
        return new ResponseEntity<List<Message>>(messagesFromSenderRecipient, HttpStatus.OK);
    }
}
