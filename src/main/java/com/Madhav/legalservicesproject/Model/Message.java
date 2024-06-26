package com.Madhav.legalservicesproject.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "Message")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Message{
    @Id
    private int id;
    private String chatroomId;
    private String senderId;
    private String recipientId;
    private String senderName;
    private String recipientName;
    private String content;
    private Date createdOn;
    private String status;
}
