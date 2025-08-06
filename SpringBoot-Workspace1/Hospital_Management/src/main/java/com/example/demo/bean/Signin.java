package com.example.demo.bean;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "signup")
public class Signin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String password;
	private String ConfirmPassword ;

}