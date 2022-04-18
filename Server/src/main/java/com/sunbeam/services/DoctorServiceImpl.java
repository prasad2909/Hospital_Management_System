package com.sunbeam.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.daos.PatientDao;
import com.sunbeam.daos.PrescriptionDao;
import com.sunbeam.dtos.EntityDtoConvertor;
import com.sunbeam.entities.Patient;
import com.sunbeam.entities.Prescription;

@Transactional
@Service
public class DoctorServiceImpl {
	@Autowired
	private PatientDao patientDao;
	@Autowired
	private EntityDtoConvertor convertor;
	@Autowired
	private PrescriptionDao prescriptionDao;

	public List<Patient> getAllPatient(int id) {
		return patientDao.findByDoctorId(id);
	}

	public Patient getPatient(int pid) {
		return patientDao.findByPatId(pid);
	}
	
	public int findDoctorIdByEmpId(int id) {
		return patientDao.findDoctorIdByEmpId(id);
	}

	public Prescription addNewPrescription(Prescription newPrescription,int  pid) {
		//Prescription pres=convertor.prescriptionDtoToEntity(newPrescription);
		System.out.println("----------");
		System.out.println(newPrescription.toString());
		System.out.println("----------");
		if(newPrescription.getPresId()==0) {
			Prescription pres1=prescriptionDao.save(newPrescription);
			 if(pres1!=null) {
				 Patient patient=getPatient(pid);
				 patient.setPresId(pres1.getPresId());
				 patientDao.save(patient);
				 return pres1; 
			 }
			 return null;
		}else
		if(newPrescription.getPresId()!=0) {
			Prescription pres1=prescriptionDao.save(newPrescription);
			 if(pres1!=null) {
				 Patient patient=getPatient(pid);
				 patient.setPresId(pres1.getPresId());
				 patientDao.save(patient);
				 return pres1; 
			 }
			 return null;
		}else
			return null;
	}
}
