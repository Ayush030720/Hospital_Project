package com.example.demo.bean;

import java.sql.Date;
import java.sql.Time;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Book_Appointment1")
public class BookAppointment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(length = 10, name = "appoint_date")
    private Date Appoint_Date;

    @Column(length = 10, name = "appoint_time")
    private Time Appoint_time;

    @Column(length = 150)
    private String Doctor, Reason, Extra_info;

    @OneToOne
    @JoinColumn(name = "info_id") // foreign key
    private patient_personalInfo info;
}
