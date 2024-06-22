package com.Madhav.legalservicesproject.ChatService;

import com.Madhav.legalservicesproject.Model.Message;
import com.Madhav.legalservicesproject.Repo.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {
    @Autowired
    private MessageRepository repository;
    public int countNewMessagesFromOnlineUser(String currUserId,String userId){
        return repository.countNewMessagesFromOnlineUsers(currUserId,userId);
    }
    public List<Message> findChatMessagesFromSelectedUser(String senderId,String recipientId){
        return repository.findMessagesFromSelectedUser(senderId,recipientId);
    }
    public List<Message> findChatMessagesByChatroomId(String chatroomId){
        return repository.findMessagesByChatroomId(chatroomId);
    }
    public void updateMessagesStatusToDelivered(List<Message> messages){
        messages.stream().filter(m -> m.getStatus().equals("RECEIVED")).forEach(m -> {
            m.setStatus("DELIVERED");
            repository.save(m);
        });
    }
}
