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



import com.sonata.model.Feedback;
import com.sonata.Repository.FeedbackRepository;



import org.springframework.web.bind.annotation.CrossOrigin;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class FeedbackController { 

Optional<Feedback>p1;

@Autowired
private FeedbackRepository prepository;

@GetMapping("/feedbacks")
public List<Feedback>getAllFeedbacks(){
return prepository.findAll();}

@GetMapping("/feedbacks/{id}")
public ResponseEntity getFeedabckbyId(@PathVariable(value="id")Long feedId) {
	p1=prepository.findById(feedId);
	return ResponseEntity.ok().body(p1);}

@PostMapping(value = "/feedbacks")
public Feedback savePratientfeedback(@RequestBody Feedback patfed) {
	return prepository.save(patfed);}

@PutMapping(value="/feedbacks/{id}")
public ResponseEntity updateFeedback(@PathVariable(value="id")Long feedbackId, @RequestBody Feedback patfeddata) {
	
p1= prepository.findById(feedbackId);
Feedback p2=p1.get();
p2.setF_id(patfeddata.getF_id());
p2.setFeedback(patfeddata.getFeedback());
p2.setD_id(patfeddata.getD_id());
p2.setP_id(patfeddata.getP_id());
p2.setDate(patfeddata.getDate());
p2.setTime(patfeddata.getTime());


Feedback updateFeedback = prepository.save(p2);
return ResponseEntity.ok(updateFeedback);

}

@DeleteMapping(value="/feedbacks/{id}")
public ResponseEntity deleteProduct(@PathVariable(value="id")Long feedbackId) {
	prepository.deleteById(feedbackId);
	return ResponseEntity.noContent().build();
}





}