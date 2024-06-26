package com.Madhav.legalservicesproject.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OnlineUserDto {
    private String email;
    private String sessionId;
    private String username;
    private Integer noOfNewMessages;
    private String status;

    @Override
    public int hashCode() {
        int prime = 31;
        return prime+ ((email==null)?0:prime+email.hashCode());
    }

    @Override
    public boolean equals(Object obj) {
        if(obj==null){
            return false;
        }
        OnlineUserDto user = (OnlineUserDto) obj;
        if(!this.email.equals(((OnlineUserDto) obj).getEmail())){
            return false;
        }
        else if(!this.sessionId.equals(((OnlineUserDto) obj).sessionId)){
            return false;
        }
        return true;
    }
}