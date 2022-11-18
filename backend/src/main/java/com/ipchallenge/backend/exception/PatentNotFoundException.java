package com.ipchallenge.backend.exception;

public class PatentNotFoundException extends RuntimeException{
    public PatentNotFoundException(Integer id){
        super("Patent not found.");
    }

}
