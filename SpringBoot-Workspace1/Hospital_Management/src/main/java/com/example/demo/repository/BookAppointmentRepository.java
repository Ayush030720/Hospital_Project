package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.bean.BookAppointment;

public interface BookAppointmentRepository extends JpaRepository<BookAppointment, Integer> {
	

}
