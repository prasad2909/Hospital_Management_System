package com.sunbeam.services;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.sunbeam.daos.MedicineDao;
import com.sunbeam.daos.PatientDao;
import com.sunbeam.dtos.EntityDtoConvertor;
import com.sunbeam.dtos.UpdatePatientDto;
import com.sunbeam.entities.Credential;
import com.sunbeam.entities.Patient;

@Transactional
@Service
public class PatientServiceImpl {

	@Autowired
	PatientDao patientDao;
	@Autowired
	MedicineDao medicineDao;
	@Autowired
	EntityDtoConvertor convertor;
	@Autowired
	PasswordEncoder passwordencoder ;
	
	public Patient findUserById(int id) {
		return patientDao.findByPatId(id);
	}
	
	public Patient findByEmailAndPassword(Credential cred)                  //patientDto
	{
		Patient patient=patientDao.findByEmail(cred.getEmail());
		String pmpassword=cred.getPassword();
		if(patient != null && pmpassword.equals(patient.getPassword()))//passwordencoder.matches(pmpassword, patient.getPassword()))
			return patient;                //convertor.entityToDto(patient);
        return null;
	}

	public String getDoctorNameByDoctorId(int id) {
		String doctorName = patientDao.findDoctorNameByDoctorId(id);
		return doctorName;
	}
	
	public Object getPrescription() {
		Object str = medicineDao.findAll();
		return str;
	}
	
	public int getDoctorCharges(int id) {
		int c = patientDao.getDoctorCharges(id);
		return c;
	}
	
	public int getDateDiff(int patId){
		int dateDiff = patientDao.getDateDiff(patId);
		return dateDiff;
	}
	
	
	public int getWardBedCharges(String id){
		int wardCharges = patientDao.getWardCharges(id);
		return wardCharges;
	}
	
	
	//davinder
	public List<Patient> findAllPatients()
	{
		List<Patient> patients = patientDao.findAll();
		return patients;
	}
	
	public Patient addPatient(Patient patientfromcontroller)
	{
		Patient patient = patientDao.save(patientfromcontroller);
		return patient;
	}
	
	public Patient getPatient(int pid) 
	{
		return patientDao.findByPatId(pid);
	}
	
	public void deletePatient(int pid)
	{
		patientDao.deleteById(pid);
	}
	
	public Map<String, Object> editPatient(int patId, Patient updatedpatient) {
		if(patientDao.existsById(patId)) {
			Patient patient=patientDao.getById(patId);
			patient.setName(updatedpatient.getName());
			patient.setEmail(updatedpatient.getEmail());
			patient.setBloodGr(updatedpatient.getBloodGr());
			patient.setDob(updatedpatient.getDob());
			patient.setDateOfAdmission(updatedpatient.getDateOfAdmission());
			patient.setDateOfRelease(updatedpatient.getDateOfRelease());
			patient.setPhoneNo(updatedpatient.getPhoneNo());
			patient.setDoctorId(updatedpatient.getDoctorId());
			patient.setPatientProblem(updatedpatient.getPatientProblem());
			patient.setPresId(updatedpatient.getPresId());
			patient.setWardBedId(updatedpatient.getWardBedId());
			patient.setPaymentStatus(updatedpatient.getPaymentStatus());
			patient.setBillAmount(updatedpatient.getBillAmount());
			
			return Collections.singletonMap("changedRows", 1);
		}
		return Collections.singletonMap("changedRows", 0);
	}
	
	public Patient findByName(String name)
	{
		return patientDao.findByName(name);
	}
	//deepak update status to paid or unpaid 
	public int updateBillingStatus(UpdatePatientDto status ) {
		if(status.getPatId()!=0) {
			Patient activePatient = patientDao.getById(status.getPatId());
			activePatient.setPaymentStatus(status.getPaymentStatus());
			patientDao.save(activePatient);
			
				return 1;
		}
		
		
		return 0;
	}
	//deepak update status to paid or unpaid 
	public int updateRelaseDate(UpdatePatientDto status) {
		if(status.getPatId()!=0) {
			Patient activePatient = patientDao.getById(status.getPatId());
			activePatient.setDateOfRelease(status.getRelaseDate());
			patientDao.save(activePatient);
			
				return 1;
		}
		return 0;
	}
	
}
