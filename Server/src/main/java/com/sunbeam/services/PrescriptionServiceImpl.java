package com.sunbeam.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.daos.PrescriptionDao;
import com.sunbeam.entities.Prescription;

@Transactional
@Service
public class PrescriptionServiceImpl {
	@Autowired
	private PrescriptionDao prescriptionDao;

	public Optional<Prescription> getPrescription(int presId) {
		return prescriptionDao.findById(presId);
	}
	
	public List<Prescription> getPrescriptionForPatient(int id){
		List<Prescription> meds = prescriptionDao.findByPrescriptionId(id);
		return meds;
	}
	
}
