package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.bean.BookAppointment;
import com.example.demo.bean.patient_personalInfo;
import com.example.demo.repository.BookAppointmentRepository;
import com.example.demo.repository.patientInfoRepositry;


@RestController
@CrossOrigin("*")
public class BookAppointmentController {

    @Autowired
    private BookAppointmentRepository bookrepo;

    @Autowired
    private patientInfoRepositry infoRepo;

    // ✅ Create Appointment
    @PostMapping("/AppointmentBook")
    public void AppointmentBook(@RequestBody BookAppointment book) {
        if (book.getInfo() != null && book.getInfo().getId() > 0) {
            int patientId = book.getInfo().getId();
            patient_personalInfo info = infoRepo.findById(patientId).orElse(null);
            book.setInfo(info);
        } else {
            book.setInfo(null);
        }
        bookrepo.save(book);
    }

    // ✅ Get All Appointments
    @GetMapping("/AppointmentList")
    public List<BookAppointment> AppointmentList() {
        return bookrepo.findAll();
    }

    // ✅ Update Appointment
    @PutMapping("/updateAppointment/{id}")
    public BookAppointment updateAppointment(@PathVariable Integer id, @RequestBody BookAppointment book) {
        return bookrepo.findById(id).map(booking -> {
            booking.setAppoint_Date(book.getAppoint_Date());
            booking.setAppoint_time(book.getAppoint_time());
            booking.setDoctor(book.getDoctor());
            booking.setReason(book.getReason());
            booking.setExtra_info(book.getExtra_info());

            if (book.getInfo() != null && book.getInfo().getId() != 0) {
                patient_personalInfo info = infoRepo.findById(book.getInfo().getId()).orElse(null);
                booking.setInfo(info);
            }

            return bookrepo.save(booking);
        }).orElseGet(() -> {
            if (book.getInfo() != null && book.getInfo().getId() != 0) {
                patient_personalInfo info = infoRepo.findById(book.getInfo().getId()).orElse(null);
                book.setInfo(info);
            }
            return bookrepo.save(book);
        });
    }

    // ✅ Delete Appointment
    @DeleteMapping("/DeleteAppointment/{id}")
    public void DeleteAppointment(@PathVariable Integer id) {
        bookrepo.deleteById(id);
    }

    // ✅ Get Appointment by ID
    @GetMapping("/Appointment/{id}")
    public Optional<BookAppointment> Appointment(@PathVariable Integer id) {
        return bookrepo.findById(id);
    }
}
