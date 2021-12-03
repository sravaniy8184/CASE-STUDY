package com.sonata.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Doctor {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "d_id")
	long d_id;
	String d_name;
	String d_spcl;
	long d_phoneno;
	String d_email;
	
	
	Doctor(){}


	public long getD_id() {
		return d_id;
	}


	public void setD_id(long d_id) {
		this.d_id = d_id;
	}


	public String getD_name() {
		return d_name;
	}


	public void setD_name(String d_name) {
		this.d_name = d_name;
	}


	public String getD_spcl() {
		return d_spcl;
	}


	public void setD_spcl(String d_spcl) {
		this.d_spcl = d_spcl;
	}


	public long getD_phoneno() {
		return d_phoneno;
	}


	public void setD_phoneno(long d_phoneno) {
		this.d_phoneno = d_phoneno;
	}


	public String getD_email() {
		return d_email;
	}


	public void setD_email(String d_email) {
		this.d_email = d_email;
	}


	@Override
	public String toString() {
		return "Doctor [d_id=" + d_id + ", d_name=" + d_name + ", d_spcl=" + d_spcl + ", d_phoneno=" + d_phoneno
				+ ", d_email=" + d_email + "]";
	}
	
}

	