package com.Madhav.legalservicesproject.Security.Config;

import com.Madhav.legalservicesproject.Security.JWT.JwtAuthenticationFilter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@Slf4j
public class WebSecurityConfig {
    @Autowired
    private JwtAuthenticationFilter jwtAuthFilter;
    @Autowired
    private AuthenticationProvider authenticationProvider;
    private static final String[] WHITE_LIST = {
            //Homepage,
            "LegalServices/register",
            "LegalServices/login",
            "chatWithServiceProvider",
            "startChatting",
            "chat_with_lawyers",
            "LegalServices/findLawyers/**",
            "LegalServices/payment/**",
            "payment/create",
            "/css/**",   // Add your static resources paths here
            "/js/**",
            "/images/**"
            //Login,
            //Register,
            //About,    
            //Frontend files
    };
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http)throws Exception{
        log.info("Inside sec filter chain");
        http.csrf()
                .disable()
                .authorizeRequests()
                .requestMatchers(WHITE_LIST)
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
}
