package com.Madhav.legalservicesproject.Repo;

import com.Madhav.legalservicesproject.Model.Message;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface MessageRepository extends MongoRepository<Message,Integer> {
    @Query("{'chatroomId': ?0}")
    List<Message> findMessagesByChatroomId(String chatroomId);
    @Query("{ 'senderId': ?0, 'recipientId': ?1 }")
    List<Message> findMessagesFromSelectedUser(String senderId,String recipientId);

    @Query(value = "{ 'recipientId': ?0, 'senderId': ?1, 'status': 'RECEIVED' }", count = true)
    int countNewMessagesFromOnlineUsers(String currentUserId,String onlineUserId);

}
