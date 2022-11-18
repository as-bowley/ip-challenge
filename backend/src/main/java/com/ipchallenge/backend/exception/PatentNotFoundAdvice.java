package com.ipchallenge.backend.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class PatentNotFoundAdvice {

    @ResponseBody
    @ExceptionHandler(PatentNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Map<String,String> exceptionHandler(PatentNotFoundException exception){
        Map<String,String> errorMap = new HashMap<>();
        errorMap.put("ErrorMessage", exception.getMessage());

        return errorMap;
    }
}
