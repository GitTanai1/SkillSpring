package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.security.JwtTokenProvider;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    private final JwtTokenProvider jwtTokenProvider;

    public AuthenticationController(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authorizationHeader) {
        LOGGER.info("START");
        String user = getUser(authorizationHeader);
        String token = jwtTokenProvider.generateToken(user);
        Map<String, String> map = new HashMap<>();
        map.put("token", token);
        LOGGER.info("END");
        return map;
    }

    private String getUser(String authorizationHeader) {
        String encodedCredentials = authorizationHeader.substring("Basic ".length());
        String decodedCredentials = new String(Base64.getDecoder().decode(encodedCredentials), StandardCharsets.UTF_8);
        return decodedCredentials.substring(0, decodedCredentials.indexOf(':'));
    }
}
