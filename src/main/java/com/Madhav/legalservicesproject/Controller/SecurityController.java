package com.Madhav.legalservicesproject.Controller;

<<<<<<< HEAD:src/main/java/com/Madhav/legalservicesproject/Controller/SecurityController.java
import com.Madhav.legalservicesproject.Security.auth.AuthenticationResponse;
import com.Madhav.legalservicesproject.Security.auth.AuthenticationService;
import com.Madhav.legalservicesproject.Security.auth.LoginRequest;
import com.Madhav.legalservicesproject.Security.auth.RegisterRequest;
=======
import com.Madhav.legalservicesproject.Security.auth.*;
>>>>>>> 1c18919636a7df0086b87c055a4d7aed5a10c82a:backend/src/main/java/com/Madhav/legalservicesproject/Controller/SecurityController.java
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import  java.util.Map;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("LegalServices")
@CrossOrigin(origins = "http://localhost:8080")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class SecurityController {
    @Autowired
    AuthenticationService service;
    Logger logger = LoggerFactory.getLogger(LoginRequest.class);

    @PostMapping("/register")
<<<<<<< HEAD:src/main/java/com/Madhav/legalservicesproject/Controller/SecurityController.java
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest registerRequest) throws Exception {
=======
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest registerRequest) {
>>>>>>> 1c18919636a7df0086b87c055a4d7aed5a10c82a:backend/src/main/java/com/Madhav/legalservicesproject/Controller/SecurityController.java
        return ResponseEntity.ok(service.register(registerRequest));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody LoginRequest loginRequest) throws Exception {
        return ResponseEntity.ok(service.login(loginRequest));
    }

    @GetMapping("/handle")
    public ResponseEntity<AuthenticationResponse> handle(@RequestBody LoginRequest loginRequest) throws Exception {
        return ResponseEntity.ok(service.login(loginRequest));
    }
}

