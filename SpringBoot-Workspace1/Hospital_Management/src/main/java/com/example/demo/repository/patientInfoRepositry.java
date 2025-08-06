package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.bean.patient_personalInfo;

public interface patientInfoRepositry extends JpaRepository<patient_personalInfo, Integer>{

}
