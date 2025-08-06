package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.bean.patient_personalInfo;
import com.example.demo.repository.patientInfoRepositry;

@RestController
@CrossOrigin("*")
public class PatientPersonalInfoController {

    @Autowired
    patientInfoRepositry personalInfoRepo;

    // ✅ Create Patient Info
    @PostMapping("/savePatientInfo")
    public patient_personalInfo savePatient(@RequestBody patient_personalInfo info) {
        return personalInfoRepo.save(info);
    }

    // ✅ Get All Patients
    @GetMapping("/allPatient")
    public List<patient_personalInfo> getAllPatients() {
        return personalInfoRepo.findAll();
    }

    // ✅ Get Patient by ID
    @GetMapping("/getPatient/{id}")
    public Optional<patient_personalInfo> getPatient(@PathVariable Integer id) {
        return personalInfoRepo.findById(id);
    }

    // ✅ Update Patient Info
    @PutMapping("/updatePatient/{id}")
    public patient_personalInfo updatePatient(@PathVariable Integer id, @RequestBody patient_personalInfo updatedInfo) {
        return personalInfoRepo.findById(id).map(existing -> {
            existing.setFullName(updatedInfo.getFullName());
            existing.setEmail(updatedInfo.getEmail());
            existing.setPhone(updatedInfo.getPhone());
            existing.setGender(updatedInfo.getGender());
            existing.setDateOfbirth(updatedInfo.getDateOfbirth());
            return personalInfoRepo.save(existing);
        }).orElseGet(() -> {
            // If not found, create new
            return personalInfoRepo.save(updatedInfo);
        });
    }

    // ✅ Delete Patient by ID
    @DeleteMapping("/deletePatient/{id}")
    public void deletePatient(@PathVariable Integer id) {
        personalInfoRepo.deleteById(id);
    }
}
