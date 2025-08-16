package com.spring.MonthChallenges.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.MonthChallenges.Models.Challenge;

public interface ChallengeRepository extends JpaRepository<Challenge, Long> {
    
    // Custom query methods can be defined here if needed
    // For example, to find challenges by month:
    List<Challenge> findByMonth(String month);
    
    // Other query methods can be added as required

}
