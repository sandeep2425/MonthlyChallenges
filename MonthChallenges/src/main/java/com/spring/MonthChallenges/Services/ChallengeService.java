package com.spring.MonthChallenges.Services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.spring.MonthChallenges.Models.Challenge;

public interface ChallengeService {
    Challenge createChallenge(String month, String description);
    List<Challenge> getChallenges();
    ResponseEntity<Challenge> getChallengeById(Long id);
    ResponseEntity<Challenge> updateChallenge(Long id, Challenge challenge);    
    ResponseEntity<String> deleteChallenge(Long id);
}
