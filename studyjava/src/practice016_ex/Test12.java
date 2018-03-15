package practice016_ex;

import java.io.*;

public class Test12 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String str1 = new String("Welcome to Tutorialspoint.com");
		
		
			String str2 = new String(str1.getBytes());
			System.out.println("Returned Value " + str2);
			str2 = new String(str1.getBytes());
			System.out.println("Returned Value " + str2);
			
		

	}

}
