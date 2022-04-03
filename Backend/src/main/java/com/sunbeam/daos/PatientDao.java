package com.sunbeam.daos;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sunbeam.entities.Patient;
@Repository
public interface PatientDao extends JpaRepository<Patient, Integer>{
	List<Patient> findByDoctorId(int id);
	Patient findByPatId(int id);
	
	@Query("select d.doctorId from Doctor d where d.empId=?1")
	int findDoctorIdByEmpId(int id);
	
	Patient findByEmail(String email);
	
	Patient findByName(String name);
	
	@Query("select u.name from Employee u where u.empId = (select d.empId from Doctor d where doctorId=?1)")
	String findDoctorNameByDoctorId(int id);
	
	//prescription table
	@Query("select p.medicineName, p.noOfDays from Prescription p where p.presId=?1")
	Object findByPresId(int id);
	
	//date difference
		@Query("select datediff(dateOfRelease,dateOfAdmission) from Patient p where id = ?1")
	    int getDateDiff(int id);
	
	//ward charges
		@Query("select w.charges from WardBed as w where w.wardBedId=?1")
	    int getWardCharges(String id); 
	
		
	//doctor charges
	@Query("select d.charges from Doctor d where d.doctorId = ?1")
         Integer getDoctorCharges(int id);
		 
	//medicine charges
    @Query("Select SUM(m.price*p.noOfDays) as total\r\n"
				+ " from Prescription p inner join Medicine m \r\n"
				+ "   on m.medicineName = p.medicineName where p.presId=?1")
	     Integer getMedicineCharges(int id);
    //davinder
    @Query("update Patient p set p.name=?1 , p.email=?2 , p.dob=?3 , p.bloodGr=?4 , p.dateOfAdmission=?5 , p.dateOfRelease=?6 , p.phoneNo=?7 , p.doctorId=?8 , p.patientProblem=?9 , p.presId=?10 , p.wardBedId=?11 , p.paymentStatus=?12 , p.billAmount=?13 where p.patId=?14")
	int editPatient(String name,String email,Date dob,String bloodGr,Date dateOfAdmission,Date dateOfRelease,String phoneNo,int doctorId,String patientProblem,int presId,int wardBedId,String paymentStatus,int billAmount);
	
}
