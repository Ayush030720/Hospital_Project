package com.example.demo.repository;

import org.springframework.stereotype.Repository;

import com.example.demo.bean.LifeStyle;

import org.springframework.data.jpa.repository.JpaRepository;


@Repository
public interface LifestyleRepository extends JpaRepository<LifeStyle, Long> {
}
