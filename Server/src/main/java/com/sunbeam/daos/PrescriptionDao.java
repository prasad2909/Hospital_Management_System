package com.sunbeam.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sunbeam.entities.Prescription;

public interface PrescriptionDao extends JpaRepository<Prescription, Integer> {

	@Query(value="select * from prescription_tb where pres_id=?1",nativeQuery = true)
    List<Prescription> findByPrescriptionId(int id);
}
