package com.sunbeam.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.entities.Medicine;
import com.sunbeam.entities.Patient;
import com.sunbeam.entities.Prescription;
import com.sunbeam.services.DoctorServiceImpl;
import com.sunbeam.services.MedicineServiceImpl;
import com.sunbeam.services.PrescriptionServiceImpl;

@CrossOrigin("*")
@RequestMapping("/doctor")
@RestController
public class DoctorControllerImpl {
	@Autowired
	private DoctorServiceImpl doctorServiceImpl;
	@Autowired 
	private MedicineServiceImpl medicineServiceImpl;
	@Autowired
	private PrescriptionServiceImpl prescriptionServiceImpl;
	
	@GetMapping("/getDoctorId/{empid}")
	public ResponseEntity<?> getAllPatient1(@PathVariable(value="empid") int  empid){
		int patients=doctorServiceImpl.findDoctorIdByEmpId(empid);
		if (patients != 0)
			return Response.success(patients);
			return Response.error("No user found");
	}
	
	@GetMapping("/getAll/{doctorId}")
	public ResponseEntity<?> getAllPatient(@PathVariable(value="doctorId") int  doctorId){
		List<Patient> patients=doctorServiceImpl.getAllPatient(doctorId);
		if (patients != null)
			return Response.success(patients);
			return Response.error("No user found");
	}
	
	@GetMapping("/get/{pid}")
	public ResponseEntity<?> getPatientById(@PathVariable(value="pid") int  pid){
		Patient patients=doctorServiceImpl.getPatient(pid);
		if (patients != null)
			return Response.success(patients);
			return Response.error("No user found");
	}
	
	@GetMapping("/getAllMedicine")
	public ResponseEntity<?> getAllMedicine(){
		List<Medicine> patients=medicineServiceImpl.getAllMedicines();
		if (patients != null)
			return Response.success(patients);
			return Response.error("No user found");
	}
	
	@PostMapping("/addNewPrescription/{pid}")
	public ResponseEntity<?> addNewPrescription(@PathVariable(value="pid") int  pid,@RequestBody Prescription newPrescription){
		System.out.println("coming from client"+newPrescription);
		Prescription message=doctorServiceImpl.addNewPrescription(newPrescription,pid);
		if (message != null)
			return Response.success(message);
			return Response.error("Data has not been added Please try again..!");
	}
	
	@GetMapping("/getPrescription/{presId}")
	public ResponseEntity<?> getPrescription(@PathVariable(value="presId") int  presId){
		System.out.println("Data comming fromm frontend"+presId);
		Optional<Prescription> pres =prescriptionServiceImpl.getPrescription(presId);
		if (pres != null)
			return Response.success(pres);
			return Response.error("Data not found");
	}
}
