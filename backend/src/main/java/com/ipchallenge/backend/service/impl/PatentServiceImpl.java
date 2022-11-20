package com.ipchallenge.backend.service.impl;

import com.ipchallenge.backend.model.Patent;
import com.ipchallenge.backend.repository.PatentRepository;
import com.ipchallenge.backend.service.PatentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatentServiceImpl  implements PatentService {

    private PatentRepository patentRepository;

    @Autowired
    public PatentServiceImpl(PatentRepository patentRepository) {
        this.patentRepository = patentRepository;
    }

    @Override
    public List<Patent> searchPatents(String query) {
        List<Patent> patents = patentRepository.searchPatents(query);
        return patents;
    }
}
