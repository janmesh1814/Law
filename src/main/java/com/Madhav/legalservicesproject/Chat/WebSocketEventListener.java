package com.Madhav.legalservicesproject.Chat;

import com.Madhav.legalservicesproject.Model.OnlineUserDto;
import com.Madhav.legalservicesproject.Model.User;
import com.Madhav.legalservicesproject.Repo.ProjectRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.GenericMessage;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectedEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

import java.util.*;
import java.util.stream.Collectors;

@Component
@Data
public class WebSocketEventListener {
    private Set<OnlineUserDto> onlineUsers;
    @Autowired
    private SimpMessageSendingOperations messagingTemplate;
    @Autowired
    private ProjectRepository repository;
    @EventListener
    public void handleWebsocketConnectListener(SessionConnectedEvent event){
        StompHeaderAccessor stompAccessor = (StompHeaderAccessor)event.getMessage(); // StompHeaderAccessor.wrap(event.getMessage())
        @SuppressWarnings("rawtypes")
        GenericMessage connectHeader = (GenericMessage) stompAccessor.getHeader(SimpMessageHeaderAccessor.CONNECT_MESSAGE_HEADER);
        assert connectHeader != null;
        @SuppressWarnings("unchecked")
        Map<String, List<String>> nativeHeaders = (Map<String, List<String>>) connectHeader.getHeaders().get(SimpMessageHeaderAccessor.NATIVE_HEADERS);
        assert nativeHeaders != null;
        String login = nativeHeaders.get("username").get(0);
        String sessionId = stompAccessor.getSessionId();
        if(this.onlineUsers == null) onlineUsers = new HashSet<>();
        Optional<User> user = repository.findUserByEmail(login);
        if(user.isPresent()){
            OnlineUserDto onl = MapperUtils.mapperObject(user.get(), OnlineUserDto.class);
            onl.setSessionId(sessionId);
            this.onlineUsers.add(onl);
        }
    }
    @EventListener
    public void handleWebSocketDisconnectListener(SessionDisconnectEvent event){
        StompHeaderAccessor stompHeaderAccessor = StompHeaderAccessor.wrap(event.getMessage());
        String sessionId = stompHeaderAccessor.getSessionId();
        OnlineUserDto offlineUsers =  this.onlineUsers
                .stream()
                .filter((a) -> a.getSessionId().equals(sessionId))
                .collect(Collectors.toList()).get(0);
        this.onlineUsers.remove(offlineUsers);
    }
}
