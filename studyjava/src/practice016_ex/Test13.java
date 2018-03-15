package practice016_ex;

import java.io.*;

public class Test13 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String str1 = new String("Welcome to Tutorialspoint.com");
		
		try{
			String str2 = new String(str1.getBytes("UTF-8"));
			System.out.println("Returned Value " + str2);
			str2 = new String(str1.getBytes("ISO-8859-1"));
			System.out.println("Returned Value " +str2);
			
		}catch (UnsupportedEncodingException e) {
			// TODO: handle exception
			System.out.println("Unsupported character set");
			
		}

	}

}
