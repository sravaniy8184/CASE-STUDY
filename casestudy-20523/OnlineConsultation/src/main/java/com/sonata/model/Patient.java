package com.sonata.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Patient {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "p_id")
	long p_id;
	String p_name;
	long p_age;
	String p_email;
	long p_phoneno;
	String p_gen;
	String p_blood;
	
	Patient(){}

	public long getP_id() {
		return p_id;
	}

	public void setP_id(long p_id) {
		this.p_id = p_id;
	}

	public String getP_name() {
		return p_name;
	}

	public void setP_name(String p_name) {
		this.p_name = p_name;
	}

	public long getP_age() {
		return p_age;
	}

	public void setP_age(long p_age) {
		this.p_age = p_age;
	}

	public String getP_email() {
		return p_email;
	}

	public void setP_email(String p_email) {
		this.p_email = p_email;
	}

	public long getP_phoneno() {
		return p_phoneno;
	}

	public void setP_phoneno(long p_phoneno) {
		this.p_phoneno = p_phoneno;
	}

	public String getP_gen() {
		return p_gen;
	}

	public void setP_gen(String p_gen) {
		this.p_gen = p_gen;
	}

	public String getP_blood() {
		return p_blood;
	}

	public void setP_blood(String p_blood) {
		this.p_blood = p_blood;
	}

	@Override
	public String toString() {
		return "Patient [p_id=" + p_id + ", p_name=" + p_name + ", p_age=" + p_age + ", p_email=" + p_email
				+ ", p_phoneno=" + p_phoneno + ", p_gen=" + p_gen + ", p_blood=" + p_blood + "]";
	}
}