package com.example.demo.bean;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "lifestyle")
public class LifeStyle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "lifestyle_id")
    private Long id;

    private String smoking;
    private String alcohol;
    private String exercise;
    private String diet;
    private String sleep;
    private String stress;
    private String notes;
}