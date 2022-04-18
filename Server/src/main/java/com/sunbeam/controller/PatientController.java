package com.sunbeam.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dtos.EntityDtoConvertor;
import com.sunbeam.dtos.UpdatePatientDto;
import com.sunbeam.entities.Credential;
import com.sunbeam.entities.Patient;
import com.sunbeam.entities.Prescription;
import com.sunbeam.services.MedicineServiceImpl;
import com.sunbeam.services.PatientServiceImpl;
import com.sunbeam.services.PrescriptionServiceImpl;

@CrossOrigin("*")
@RequestMapping("/patient")
@RestController
public class PatientController {
	
	@Autowired
	private PatientServiceImpl patientServiceImpl;
	
	@Autowired
	private MedicineServiceImpl medicineServiceImpl;
	
	@Autowired
	private PrescriptionServiceImpl prescriptionServiceImpl;
	
	@Autowired
	private EntityDtoConvertor converter;
	
	@PostMapping("/signin")                                   //patient signin
	public ResponseEntity<?> signin(@RequestBody Credential cred)
	{
		System.out.println(cred);
		Patient patient=patientServiceImpl.findByEmailAndPassword(cred);
		patient=converter.patientEntityToDtoConverter(patient);
		System.out.println("---------> "+patient);
		if(patient==null)
			return Response.error("user not found");
		return Response.success(patient);
	}

	@GetMapping("/{id}")                                      //find user by id 
	public ResponseEntity<?> getEmployee(@PathVariable("id") int id) { 
		try {
			Patient result = patientServiceImpl.findUserById(id);
			result=converter.patientEntityToDtoConverter(result);
			if (result == null)
				return Response.error("User not found");
			return Response.success(result);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}
	
	@GetMapping("/doctorName/{doctoId}")              //get doctor Name for particular patient                        
	public ResponseEntity<?> getDoctorNameByDoctorId(@PathVariable("doctoId") int id) { 
		try {
			String result = patientServiceImpl.getDoctorNameByDoctorId(id);
			if (result == null)
				return Response.error("User not found");
			return Response.success(result);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}
	
	
	@GetMapping("/getPres/{presId}")                       //get prescription by presId through medicineDao               
	public ResponseEntity<?> getPrescription(@PathVariable("presId") int id) { 
		try {
			List <Prescription> result = prescriptionServiceImpl.getPrescriptionForPatient(id);
			if (result == null)
				return Response.error("Data not found");
			return Response.success(result);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}
	
	@GetMapping("/dateDiff/{patId}")                       //date difference betn doAdmission & doRelease               
	public ResponseEntity<?> getDateDiff(@PathVariable("patId") int id) { 
		try {
			int result = patientServiceImpl.getDateDiff(id);
			return Response.success(result);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}
	
	@GetMapping("/wardCharges/{wardBedId}")                //get ward charges by wardBedId                      
	public ResponseEntity<?> getWardBedCharges(@PathVariable("wardBedId") String id) { 
		try {
			int result = patientServiceImpl.getWardBedCharges(id);
			return Response.success(result);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}
	
	@GetMapping("/medicineCharges/{presId}")        //medicine charges alone by presId                          
	public ResponseEntity<?> getCharges(@PathVariable("presId") int id) { 
		try {
			int result = medicineServiceImpl.getMedicineCharges(id);
			return Response.success(result);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}
	
	@GetMapping("/doctorCharges/{doctorId}")           //doctor charges alone by doctorId                          
	public ResponseEntity<?> getDoctorCharges(@PathVariable("doctorId") int id) { 
		try {
			int result = patientServiceImpl.getDoctorCharges(id);
			return Response.success(result);
		} catch (Exception e) {
			return Response.error(e.getMessage());
		}
	}
	
	//davinder
	@GetMapping("/getallpatients")
	public ResponseEntity<?> allPatients()
	{
		List<Patient> patients= patientServiceImpl.findAllPatients();
		return Response.success(patients);
	}
	
	@PostMapping("/postpatient")
	public ResponseEntity<?> postPatients(@RequestBody Patient newPateint)
	{
		Patient gettingpatientfromclient = patientServiceImpl.addPatient(newPateint);
	    return Response.success(gettingpatientfromclient);		
	}
	
	@GetMapping("/getpatientid/{id}")
	public ResponseEntity<?> getById(@PathVariable int id)
	{
		Patient patient = patientServiceImpl.getPatient(id);
		return Response.success(patient);
	}
	
	@DeleteMapping("/deletepatient/{id}")
	public ResponseEntity<?> deleteById(@PathVariable int id)
	{
		System.out.println(id);
		patientServiceImpl.deletePatient(id);
		return Response.success("patient got deleted");
	}
	
	@PutMapping("/edit/{patId}")
	public ResponseEntity<?> editUser(@RequestBody Patient patient,@PathVariable int patId)
	{
		Map<String, Object> editedPatient = patientServiceImpl.editPatient(patId, patient);
		return Response.success(editedPatient);
	}
	
	@GetMapping("/getbyname/{name}")
	public ResponseEntity<?> getUserByName(@PathVariable String name)
	{
		System.out.println(name);
		Patient patient = patientServiceImpl.findByName(name);
		System.out.println("-----"+patient);
		return Response.success(patient);
	}
	//deepak update patient status
	@PostMapping("/updateStatus")
	public ResponseEntity<?> updateBillingStatus(@RequestBody UpdatePatientDto paymentStatus){
		System.out.println("-------------status"+paymentStatus.getPaymentStatus()+"patid"+paymentStatus.getPatId());
		int updateBillingStatus = patientServiceImpl.updateBillingStatus(paymentStatus);
		if(updateBillingStatus==1)
		return Response.success(paymentStatus.getPaymentStatus());
		return Response.error(0);
	}
	//deepak update patient status
	@PostMapping("/updateRelaseDate")
	public ResponseEntity<?> updateReleaseDate(@RequestBody UpdatePatientDto paymentStatus){
		int updateBillingStatus = patientServiceImpl.updateRelaseDate(paymentStatus);
		if(updateBillingStatus==1)
		return Response.success(1);
		return Response.error(0);
	}
}
