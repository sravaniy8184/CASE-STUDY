package com.sonata.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity

public class Diseases {
@Id
//@GeneratedValue(strategy = GenerationType.AUTO)
long dis_id;
String dis_name;

Diseases(){}

public long getDis_id() {
	return dis_id;
}

public void setDis_id(long dis_id) {
	this.dis_id = dis_id;
}

public String getDis_name() {
	return dis_name;
}

public void setDis_name(String dis_name) {
	this.dis_name = dis_name;
}

@Override
public String toString() {
	return "Diseases [dis_id=" + dis_id + ", dis_name=" + dis_name + "]";
}
}