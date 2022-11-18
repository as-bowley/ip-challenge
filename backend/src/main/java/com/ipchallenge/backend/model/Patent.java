package com.ipchallenge.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.sql.Date;

@Entity
public class Patent {
    @Id
    @GeneratedValue
    private Integer publication_id;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date publication_date;
    private String title;

    public Integer getPublication_id() {
        return publication_id;
    }

    public void setPublication_id(Integer publication_id) {
        this.publication_id = publication_id;
    }

    public Date getPublication_date() {
        return publication_date;
    }

    public void setPublication_date(Date publication_date) {
        this.publication_date = publication_date;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
