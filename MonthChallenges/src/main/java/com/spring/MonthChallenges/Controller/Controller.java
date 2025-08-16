package com.spring.MonthChallenges.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.MonthChallenges.Models.Challenge;
import com.spring.MonthChallenges.Services.ChallengeServiceImpl;

@RestController
@RequestMapping("/api/challenges")
public class Controller {

    @Autowired
    ChallengeServiceImpl challengeServiceImpl;
   

    @GetMapping
    public List<Challenge> getChallenges() {
        return challengeServiceImpl.getChallenges();
    }

    @PostMapping
    public Challenge createChallenge(@RequestBody Challenge challenge) {
        return challengeServiceImpl.createChallenge(challenge.getMonth(), challenge.getDescription());
    }

    @GetMapping("/{id}")
    public Challenge getChallengeById(@PathVariable Long id) {
        return challengeServiceImpl.getChallengeById(id).getBody();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Challenge> updateChallenge(@PathVariable Long id, @RequestBody Challenge challenge) {
        return challengeServiceImpl.updateChallenge(id, challenge);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteChallenge(@PathVariable Long id) {
        return challengeServiceImpl.deleteChallenge(id);
    }

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello from Java backend!";
    }
}
