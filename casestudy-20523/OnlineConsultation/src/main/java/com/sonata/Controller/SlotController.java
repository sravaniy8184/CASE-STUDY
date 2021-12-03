package com.sonata.Controller;

import java.util.List;
import java.util.Optional;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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



import com.sonata.model.Slot;
import com.sonata.Repository.SlotRepository;
import org.springframework.web.bind.annotation.CrossOrigin;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SlotController {

Optional<Slot>p1;

@Autowired
private SlotRepository prepository;

@GetMapping("/slots")
public List<Slot>getAllSlots(){
return prepository.findAll();}

@GetMapping("/slots/{id}")
public ResponseEntity getSlotsbyId(@PathVariable(value="id")Long slotId) {
	p1=prepository.findById(slotId);
	return ResponseEntity.ok().body(p1);}

@PostMapping(value = "/slots")
public Slot saveSlot(@RequestBody Slot slo) {
	return prepository.save(slo);}

@PutMapping(value="/slots/{id}")
public ResponseEntity updateSlot(@PathVariable(value="id")Long slotId, @RequestBody Slot slotdata) {
	
p1= prepository.findById(slotId);
Slot p2=p1.get();
p2.setS_id(slotdata.getS_id());
p2.setD_id(slotdata.getD_id());
p2.setP_id(slotdata.getP_id());
p2.setDis_id(slotdata.getDis_id());
p2.setDate(slotdata.getDate());
p2.setStartTime(slotdata.getStartTime());
p2.setEndTime(slotdata.getEndTime());



Slot updateSlot = prepository.save(p2);
return ResponseEntity.ok(updateSlot);

}

@DeleteMapping(value="/slots/{id}")
public ResponseEntity deleteSlot(@PathVariable(value="id")Long slotId) {
	prepository.deleteById(slotId);
	return ResponseEntity.noContent().build();
}

}


