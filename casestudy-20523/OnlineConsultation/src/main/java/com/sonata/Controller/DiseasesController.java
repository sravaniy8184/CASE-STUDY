package com.sonata.Controller;

import java.util.List;
import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.validation.annotation.Valid;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



import com.sonata.model.Diseases;
import com.sonata.Repository.DiseasesRepository;



import org.springframework.web.bind.annotation.CrossOrigin;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DiseasesController {

Optional<Diseases>p1;

@Autowired
private DiseasesRepository prepository;

@GetMapping("/diseases")
public List<Diseases>getAllDiseases(){
return prepository.findAll();}

@GetMapping("/diseases/{id}")
public ResponseEntity getDiseasesbyId(@PathVariable(value="id")Long disId) {
	p1=prepository.findById(disId);
	return ResponseEntity.ok().body(p1);}

@PostMapping(value = "/diseases")
public Diseases saveDiseases(@RequestBody Diseases dis) {
	return prepository.save(dis);}

@PutMapping(value="/diseases/{id}")
public ResponseEntity updateDiseases(@PathVariable(value="id")Long disId, @RequestBody Diseases disdata) {
	
p1= prepository.findById(disId);
Diseases p2=p1.get();
p2.setDis_id(disdata.getDis_id());
p2.setDis_name(disdata.getDis_name());


Diseases updateDiseases = prepository.save(p2);
return ResponseEntity.ok(updateDiseases);

}

@DeleteMapping(value="/diseases/{id}")
public ResponseEntity deleteDiseases(@PathVariable(value="id")Long disId) {
	prepository.deleteById(disId);
	return ResponseEntity.noContent().build();
}




}