package com.sonata.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity

public class Doctorlogin{
@Id

long d_id;
String password;

Doctorlogin(){}

public long getD_id() {
	return d_id;
}

public void setD_id(long d_id) {
	this.d_id = d_id;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

@Override
public String toString() {
	return "Doctorlogin [d_id=" + d_id + ", password=" + password + "]";
}
}


