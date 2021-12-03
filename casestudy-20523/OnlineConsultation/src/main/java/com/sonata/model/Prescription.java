package com.sonata.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity

public class Prescription {
@Id
//@GeneratedValue(strategy = GenerationType.AUTO)
long s_id;
String prescription;


Prescription(){}


public long getS_id() {
	return s_id;
}


public void setS_id(long s_id) {
	this.s_id = s_id;
}


public String getPrescription() {
	return prescription;
}


public void setPrescription(String prescription) {
	this.prescription = prescription;
}


@Override
public String toString() {
	return "Prescription [s_id=" + s_id + ", prescription=" + prescription + "]";
}
}
