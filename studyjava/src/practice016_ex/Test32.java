package practice016_ex;

import java.io.*;

public class Test32 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String Str1 = new String("Welcome-to-Tutorialspoint.com");
		System.out.println("Return Value :");
		
		for(String retval: Str1.split("-")){
			System.out.println(retval);
		}
	}
}