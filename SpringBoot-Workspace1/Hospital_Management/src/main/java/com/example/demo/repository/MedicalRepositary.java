package com.example.demo.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.bean.Medical;



@Repository
public interface MedicalRepositary extends JpaRepository<Medical, Long> {
}
