package com.Madhav.legalservicesproject.Repo;

import com.Madhav.legalservicesproject.Model.Chatroom;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ChatroomRepository extends MongoRepository<Chatroom,Integer>{
    @Query("{senderId : ?0,recipientId : ?1}")
    Optional<Chatroom> findChatroomBySenderIdAndRecipientId(String senderId,String recipientId);
}
