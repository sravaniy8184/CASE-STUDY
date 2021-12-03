package com.sonata.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity
public class Slot {
@Id
//@GeneratedValue(strategy = GenerationType.AUTO)
long s_id;
int d_id;
int p_id;
int dis_id;
String date;
String startTime;
String endTime; 


Slot(){}


public long getS_id() {
	return s_id;
}


public void setS_id(long s_id) {
	this.s_id = s_id;
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


public int getDis_id() {
	return dis_id;
}


public void setDis_id(int dis_id) {
	this.dis_id = dis_id;
}


public String getDate() {
	return date;
}


public void setDate(String date) {
	this.date = date;
}


public String getStartTime() {
	return startTime;
}


public void setStartTime(String startTime) {
	this.startTime = startTime;
}


public String getEndTime() {
	return endTime;
}


public void setEndTime(String endTime) {
	this.endTime = endTime;
}


@Override
public String toString() {
	return "Slot [s_id=" + s_id + ", d_id=" + d_id + ", p_id=" + p_id + ", dis_id=" + dis_id + ", date=" + date
			+ ", startTime=" + startTime + ", endTime=" + endTime + "]";
}
}



