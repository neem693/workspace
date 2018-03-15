package practice007;

import java.io.*;

public class Emp {
	public String name;
	public double salary;
	
	public Emp(String empName){
		name = empName;
	}
	public void setSalary(double empSal){
		salary = empSal;
	}
	
	public void printEmp(){
		System.out.println("name : " + name);
		System.out.println("salary : " + salary);
	}
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Emp ora =  new Emp("ORATREE");
		ora.setSalary(1000);
		ora.printEmp();

	}

}
