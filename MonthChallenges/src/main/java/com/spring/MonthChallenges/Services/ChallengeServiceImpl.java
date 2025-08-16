package com.spring.MonthChallenges.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.spring.MonthChallenges.Models.Challenge;
import com.spring.MonthChallenges.Repositories.ChallengeRepository;

@Service
public class ChallengeServiceImpl implements ChallengeService{

    @Autowired
    private ChallengeRepository challengeRepository;
    
    @Override
    public Challenge createChallenge(String month, String description) {
        Challenge challenge = new Challenge();
        challenge.setMonth(month);
        challenge.setDescription(description);
        return challengeRepository.save(challenge);
    }

    @Override
    public List<Challenge> getChallenges() {
        return challengeRepository.findAll();
    }

    @Override
    public ResponseEntity<Challenge> getChallengeById(Long id) {
        Challenge challenge = challengeRepository.findById(id).orElseThrow(() -> new RuntimeException("Challenge not found"));
        return ResponseEntity.ok(challenge);
    }

    @Override
    public ResponseEntity<Challenge> updateChallenge(Long id, Challenge challenge) {
        Challenge existingChallenge = challengeRepository.findById(id).orElseThrow(() -> new RuntimeException("Challenge not found"));
        existingChallenge.setMonth(challenge.getMonth());
        existingChallenge.setDescription(challenge.getDescription());
        Challenge updatedChallenge = challengeRepository.save(existingChallenge);
        return ResponseEntity.ok(updatedChallenge);
    }

    @Override
    public ResponseEntity<String> deleteChallenge(Long id) {
        Challenge challenge = challengeRepository.findById(id).orElseThrow(() -> new RuntimeException("Challenge not found"));
        challengeRepository.delete(challenge);
        return ResponseEntity.ok("Challenge deleted successfully");
    }

}
