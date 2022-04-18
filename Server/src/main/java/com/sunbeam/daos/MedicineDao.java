package com.sunbeam.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sunbeam.entities.Medicine;

public interface MedicineDao extends JpaRepository<Medicine, String> {
	//medicine charges
    @Query(value = "select  SUM(mt.price*pt.no_of_days) from prescription_tb pt "
			+ " join medicine_tb mt on mt.medicine_name=pt.medicine_name where pres_id=?1", nativeQuery = true)
	     Integer getMedicineCharges(int id);
}
