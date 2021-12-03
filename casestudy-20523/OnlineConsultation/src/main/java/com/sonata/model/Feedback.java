package com.sonata.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity

public class Feedback {
@Id
//@GeneratedValue(strategy = GenerationType.AUTO)
long f_id;
String feedback;
int d_id;
int p_id;
String date;
String time;

Feedback(){}

public long getF_id() {
	return f_id;
}

public void setF_id(long f_id) {
	this.f_id = f_id;
}

public String getFeedback() {
	return feedback;
}

public void setFeedback(String feedback) {
	this.feedback = feedback;
}

public int getD_id() {
	return d_id;
}

public void setD_id(int d_id) {
	this.d_id = d_id;
}

public int getP_id() {
	return p_id;
}

public void setP_id(int p_id) {
	this.p_id = p_id;
}

public String getDate() {
	return date;
}

public void setDate(String date) {
	this.date = date;
}

public String getTime() {
	return time;
}

public void setTime(String time) {
	this.time = time;
}

@Override
public String toString() {
	return "Feedback [f_id=" + f_id + ", feedback=" + feedback + ", d_id=" + d_id + ", p_id=" + p_id + ", date=" + date
			+ ", time=" + time + "]";
}
}