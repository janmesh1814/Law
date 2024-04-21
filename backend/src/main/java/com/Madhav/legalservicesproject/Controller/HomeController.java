//package com.Madhav.legalservicesproject.Controller;
//
//import com.Madhav.legalservicesproject.Model.Roles;
//import com.Madhav.legalservicesproject.Model.User;
//import com.Madhav.legalservicesproject.Repo.ProjectRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//
//@RestController
//@RequestMapping("LegalServices")
//public class HomeController {
//    @Autowired
//    ProjectRepository repo;
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//    @PostMapping("/register")
//    public void Register(@RequestBody User user){
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
////        user.setRole(Roles.USER.getRole());
//        repo.save(user);
//    }
//}
