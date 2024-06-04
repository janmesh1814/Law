package com.Madhav.legalservicesproject.Controller;

import com.Madhav.legalservicesproject.Model.ChatMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {
    Logger logger = LoggerFactory.getLogger(ChatController.class);
    @MessageMapping("/chatWithServiceProvider")
    public void sendMessage(@Payload ChatMessage message, SimpMessageHeaderAccessor headerAccessor,SimpMessagingTemplate template){
        logger.info("Send any message"+message);
//        message.setRoomId(message.getSender());
        String roomId = message.getRoomId();
        headerAccessor.getSessionAttributes().put("roomId",roomId);
        String destination = "/topic/" + roomId;
        template.convertAndSend(destination,message);
    }
    @MessageMapping("startChatting")
    public void addUserOrServiceProvider(@Payload ChatMessage message,SimpMessageHeaderAccessor headerAccessor,SimpMessagingTemplate template){
        logger.info("Start chatting");
        String roomId = message.getRoomId();
        headerAccessor.getSessionAttributes().put("username",message.getSender());
        headerAccessor.getSessionAttributes().put("roomId",roomId);
        String destination = "/topic/" + roomId;
        template.convertAndSend(destination,message);
    }
}