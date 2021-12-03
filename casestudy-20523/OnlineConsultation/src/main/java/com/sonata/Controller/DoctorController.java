package com.sonata.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sonata.model.Doctor;
import com.sonata.Repository.DoctorRepository;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DoctorController {
	
	Optional<Doctor> d1;
	
	@Autowired
	private DoctorRepository drrepository;
	
	
	@GetMapping("/doctors")
	public List<Doctor> getAllDoctors(){
		return drrepository.findAll();
	}
	
	@GetMapping("/doctors/{id}")
	public ResponseEntity getDoctorById(@PathVariable(value = "id") Long dId){
		d1=drrepository.findById(dId);
		return ResponseEntity.ok().body(d1);
		
	}
	
	@PostMapping("/doctors")
	public Doctor saveDoctor(@RequestBody Doctor doct) {
		
		return drrepository.save(doct);
	}
	
	@PutMapping(value = "/doctors/{id}")
	public ResponseEntity updateDocotor(@PathVariable(value = "id") Long dId, @Validated @RequestBody Doctor ddata) {
		d1=drrepository.findById(dId);
		Doctor d2 =d1.get();
		d2.setD_id(ddata.getD_id());
		d2.setD_name(ddata.getD_name());
		d2.setD_spcl(ddata.getD_spcl());
		d2.setD_phoneno(ddata.getD_phoneno());
		d2.setD_email(ddata.getD_email());
		
		
		Doctor updateDoctor = drrepository.save(d2);
		return ResponseEntity.ok(updateDoctor);
	}
	
	@DeleteMapping(value = "/doctors/{id}")
	public ResponseEntity deleteDoctor(@PathVariable(value = "id") Long dId) {
		drrepository.deleteById(dId);
		return ResponseEntity.noContent().build();
	}
	

}
