package com.Madhav.legalservicesproject.ChatService;

import com.Madhav.legalservicesproject.Model.Chatroom;
import com.Madhav.legalservicesproject.Repo.ChatroomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ChatroomService {
    @Autowired
    private ChatroomRepository chatroomRepository;
    public Chatroom findChatroomBySenderIdAndRecipientId(String senderId,String recipientId){
        Optional<Chatroom> found = chatroomRepository.findChatroomBySenderIdAndRecipientId(senderId,recipientId);
        if(found.isPresent()){
            return found.get();
        }
        else return null;
    }

}