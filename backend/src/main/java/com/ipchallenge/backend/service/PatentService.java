package com.ipchallenge.backend.service;

import com.ipchallenge.backend.model.Patent;

import java.util.List;

public interface PatentService {
    List<Patent> searchPatents(String query);
}
