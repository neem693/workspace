package practice016_ex;

import java.io.*;

public class Test30 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String Str1 = new String("Welcome to Tutorialspoint.com");
		
		System.out.print("Return Value :");
		System.out.println(Str1.replaceAll("(.*)Tutorials(.*)", "AMROOD"));

	}
}