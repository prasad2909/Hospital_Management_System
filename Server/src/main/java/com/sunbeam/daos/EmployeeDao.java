package com.sunbeam.daos;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sunbeam.entities.Employee;

public interface EmployeeDao extends JpaRepository<Employee, Integer> {

	Employee findByEmail(String email);

//	@Modifying
//	@Query("select name from User where role = 'doctor'")
	List<Employee> findByRole(String role);

//	@Modifying
//	@Query("select doctorId from Doctor d inner join User u on d.emp_id = u.emp_id where role = 'doctor'")
//	int getDoctorId(String name);

//	@Modifying
//	@Query("select emp_id from User u where u.name = ?1")
//	int getDoctorId(String name);

	@Query("update Employee u set u.name=?1 , u.role=?2 , u.securityQuestion=?3 , u.securityAnswer=?4 , u.dob=?5 , u.hireDate=?6 , u.phoneNo=?7 , u.salary=?8 where u.empId=?9")
	int editUser(String name, String role, String security_question, String security_answer, Date dob, Date hire_date,
			String phone_no, String salary, int id);
//	@Query("update User u set u.name=?2 where u.emp_id=?1")
//	int editUser(int id,String name);

	Employee findByName(String name);
	boolean existsByEmail(String email);
	

}
