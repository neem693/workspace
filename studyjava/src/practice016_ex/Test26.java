package practice016_ex;

import java.io.*;

public class Test26 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String Str = new String("Welcome to Tutorialspoint.com");
		
		System.out.print("Return Value :");
		System.out.println(Str.matches("(.*)Tutorials(.*)"));
		
		System.out.print("Return Value :");
		System.out.println(Str.matches("Tutorials"));
		
		System.out.print("Return Value :");
		System.out.println(Str.matches("Welcome(.*)"));		
		
	}
}