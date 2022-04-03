package com.sunbeam.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.daos.MedicineDao;
import com.sunbeam.entities.Medicine;

@Transactional
@Service
public class MedicineServiceImpl {
@Autowired 
private MedicineDao medicineDao;

public List<Medicine> getAllMedicines(){
	return medicineDao.findAll();
}

public int getMedicineCharges(int id) {
	Integer c = medicineDao.getMedicineCharges(id);
	return c;
}
}
