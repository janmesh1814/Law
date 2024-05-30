package com.Madhav.legalservicesproject.ChatConfig;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class ChatConfiguration implements WebSocketMessageBrokerConfigurer {
    Logger logger = LoggerFactory.getLogger(ChatConfiguration.class);
    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry){
        logger.info("Configuring message broker");
        registry.enableSimpleBroker("/topic");
        registry.setApplicationDestinationPrefixes("/app");
    }
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        logger.info("Entry point");
        registry.addEndpoint("/chat_with_lawyers_for_free");
    }
}
