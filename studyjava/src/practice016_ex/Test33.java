package practice016_ex;

import java.io.*;

public class Test33 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String Str1 = new String("Welcome-to-Tutorialspoint.com");
		System.out.println("Return Value :");
		
		for(String retval: Str1.split("-",2)){
			System.out.println(retval);
		}
		System.out.println("");
		System.out.println("Return Value :");
		
		for(String retval: Str1.split("-", 3)){
			System.out.println(retval);
		}
		System.out.println("");
		System.out.println("Return Value :");
		
		for(String retval: Str1.split("-", 0)){
			System.out.println(retval);
		}
		System.out.println("");
		
	}
}