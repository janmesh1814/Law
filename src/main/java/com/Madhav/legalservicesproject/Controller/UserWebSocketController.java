package com.Madhav.legalservicesproject.Controller;

import com.Madhav.legalservicesproject.Chat.MapperUtils;
import com.Madhav.legalservicesproject.Chat.WebSocketEventListener;
import com.Madhav.legalservicesproject.ChatService.MessageService;
import com.Madhav.legalservicesproject.Model.OnlineUserDto;
import com.Madhav.legalservicesproject.Repo.ProjectRepository;
import com.sun.jdi.InternalException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/ws/users")
public class UserWebSocketController {
    @Autowired
    private WebSocketEventListener webSocketEventListener;
    @Autowired
    private MessageService messageService;
    @Autowired
    private ProjectRepository repository;
    @GetMapping("/{currUserId}")
    public ResponseEntity<List<OnlineUserDto>> getOnlineUsers(@PathVariable String currUserId){
        List<OnlineUserDto> usersWithStatus = new ArrayList<>();
        List<OnlineUserDto> offlineUsers = MapperUtils.mapperList(repository.findAll(),OnlineUserDto.class);
        offlineUsers.stream().map(u -> {
            u.setStatus("OFFLINE");
            return u;
        }).collect(Collectors.toList());
        try{
            Set<OnlineUserDto> onlineUserSet = webSocketEventListener.getOnlineUsers();
            if(onlineUserSet != null){
                List<OnlineUserDto> onlineUsersList = onlineUserSet.stream().collect(Collectors.toList());
                onlineUsersList.forEach(o -> {
                    int count = messageService.countNewMessagesFromOnlineUser(currUserId,o.getEmail());
                    o.setNoOfNewMessages(count);
                    o.setStatus("ONLINE");
                });
                usersWithStatus.addAll(onlineUsersList);
                List<OnlineUserDto> finalOnlineUsers = onlineUsersList;
                offlineUsers.forEach(u -> {
                    if(finalOnlineUsers.stream().map(OnlineUserDto::getUsername).collect(Collectors.toList()).contains(u.getUsername()) == false){
                        usersWithStatus.add(u);
                    }
                });
            }
            else{
                usersWithStatus.addAll(offlineUsers);
            }
        }
        catch (Exception e){
            throw new InternalException("Cannot get the no.of online users");
        }
        return new ResponseEntity<List<OnlineUserDto>>(usersWithStatus, HttpStatus.OK);
    }
}
