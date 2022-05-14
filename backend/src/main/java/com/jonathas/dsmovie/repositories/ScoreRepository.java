package com.jonathas.dsmovie.repositories;

import com.jonathas.dsmovie.entities.Score;
import com.jonathas.dsmovie.entities.ScorePK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {
}
