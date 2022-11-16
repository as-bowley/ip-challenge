package com.ipchallenge.backend.controller;

import com.ipchallenge.backend.model.Patent;
import com.ipchallenge.backend.repository.PatentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PatentController {

    @Autowired
    private PatentRepository patentRepository;

    @PostMapping("/patent")
     Patent patent(@RequestBody Patent newPatent){
        return patentRepository.save(newPatent);
    }

    @GetMapping("/patents")
    List<Patent> getAllPatents(){
        return patentRepository.findAll();
    }
}
