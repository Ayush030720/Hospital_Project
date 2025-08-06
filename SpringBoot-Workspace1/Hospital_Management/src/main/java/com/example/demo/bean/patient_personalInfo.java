package com.example.demo.bean;

import java.sql.Date;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "PersonalInfo")
public class patient_personalInfo {

    @Id
    private int id;

    @Column(length = 40, name = "full_name")
    private String fullName;

    @Column(name = "date_of_birth")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date dateOfbirth;

    @Column(length = 40)
    private String gender;

    @Column(length = 40)
    private String phone;

    @Column(length = 40)
    private String email;

    @Column(length = 40)
    private String address;

//    @OneToOne(mappedBy = "patient", cascade = CascadeType.ALL)
//    private LifestyleInfo lifestyle;
}
