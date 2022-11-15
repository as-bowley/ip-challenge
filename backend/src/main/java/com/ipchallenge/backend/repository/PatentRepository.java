package com.ipchallenge.backend.repository;

import com.ipchallenge.backend.model.Patent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatentRepository extends JpaRepository<Patent, Integer> {
}
