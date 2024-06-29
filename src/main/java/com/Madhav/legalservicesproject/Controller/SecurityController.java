package com.Madhav.legalservicesproject.Controller;

import com.Madhav.legalservicesproject.Security.auth.AuthenticationResponse;
import com.Madhav.legalservicesproject.Security.auth.AuthenticationService;
import com.Madhav.legalservicesproject.Security.auth.LoginRequest;
import com.Madhav.legalservicesproject.Security.auth.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("LegalServices")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class SecurityController {
    @Autowired
    AuthenticationService service;
    Logger logger = LoggerFactory.getLogger(LoginRequest.class);
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest registerRequest) throws Exception {
        return ResponseEntity.ok(service.register(registerRequest));
    }
    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody LoginRequest loginRequest) throws Exception {
        return ResponseEntity.ok(service.login(loginRequest));
    }
}
