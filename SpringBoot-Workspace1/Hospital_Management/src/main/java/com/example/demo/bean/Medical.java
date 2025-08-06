package com.example.demo.bean;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "medical")
public class Medical {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "medical_id")
    private Long id;

    @Column(name = "blood_group")
    private String bloodGroup;

    @Column(name = "allergies")
    private String allergies;

    @Column(name = "conditions")
    private String conditions;

    @Column(name = "surgeries")
    private String surgeries;

    @Column(name = "medications")
    private String medications;

    @Column(name = "family_history")
    private String familyHistory;

    @Column(name = "immunizations")
    private String immunizations;

}