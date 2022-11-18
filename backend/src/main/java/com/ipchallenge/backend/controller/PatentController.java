package com.ipchallenge.backend.controller;

import com.ipchallenge.backend.exception.PatentNotFoundException;
import com.ipchallenge.backend.model.Patent;
import com.ipchallenge.backend.repository.PatentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
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

    @GetMapping("/patent/{id}")
    Patent getPatentById(@PathVariable Integer id) {
        return patentRepository.findById(id)
                .orElseThrow(() -> new PatentNotFoundException(id));
    }

    @PutMapping("/patent/{id}")
    Patent updatePatent(@RequestBody Patent newPatent,@PathVariable Integer id) {
        return patentRepository.findById(id)
                .map(patent -> {
                    patent.setTitle(newPatent.getTitle());
                    patent.setPublication_date(newPatent.getPublication_date());
                    return patentRepository.save(patent);
                }).orElseThrow(() -> new PatentNotFoundException(id));
    }

    @DeleteMapping("/patent/{id}")
    String deletePatent(@PathVariable Integer id){
        if(!patentRepository.existsById(id)){
            throw  new PatentNotFoundException(id);
        }
        patentRepository.deleteById(id);
        return "Patent " + id + " has been deleted successfully.";
    }
}
