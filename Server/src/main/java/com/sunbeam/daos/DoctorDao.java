package com.sunbeam.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Doctor;

public interface DoctorDao extends JpaRepository<Doctor, Integer> {

}
