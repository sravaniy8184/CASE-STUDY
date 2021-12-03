package com.sonata.Controller;


import java.util.List;
import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.validation.annotation.Valid;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



import com.sonata.model.Patient;
import com.sonata.Repository.PatientRepository;
import org.springframework.web.bind.annotation.CrossOrigin;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PatientController {

Optional<Patient>p1;

@Autowired
private PatientRepository prepository;

@GetMapping("/patients")
public List<Patient>getAllPatients(){
return prepository.findAll();}

@GetMapping("/patients/{id}")
public ResponseEntity getPatientbyId(@PathVariable(value="id")Long patId) {
	p1=prepository.findById(patId);
	return ResponseEntity.ok().body(p1);}

@PostMapping(value = "/patients")
public Patient savePatient(@RequestBody Patient pat) {
	return prepository.save(pat);}

@PutMapping(value="/patients/{id}")
public ResponseEntity updatePatient(@PathVariable(value="id")Long patId, @RequestBody Patient patdata) {
	
p1= prepository.findById(patId);
Patient p2=p1.get();
p2.setP_id(patdata.getP_id());
p2.setP_name(patdata.getP_name());
p2.setP_age(patdata.getP_age());
p2.setP_email(patdata.getP_email());
p2.setP_phoneno(patdata.getP_phoneno());
p2.setP_gen(patdata.getP_gen());
p2.setP_blood(patdata.getP_blood());

Patient updatePatient = prepository.save(p2);
return ResponseEntity.ok(updatePatient);

}

@DeleteMapping(value="/patients/{id}")
public ResponseEntity deleteProduct(@PathVariable(value="id")Long patId) {
	prepository.deleteById(patId);
	return ResponseEntity.noContent().build();
}





}