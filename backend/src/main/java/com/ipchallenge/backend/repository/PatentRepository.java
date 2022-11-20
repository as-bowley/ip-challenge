package com.ipchallenge.backend.repository;

import com.ipchallenge.backend.model.Patent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PatentRepository extends JpaRepository<Patent, Integer> {

    @Query("SELECT p FROM Patent p WHERE " +
            "p.title LIKE CONCAT('%', :query, '%')")
    List<Patent> searchPatents(String query);

}
