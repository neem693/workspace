package practice016_ex;

import java.io.*;

public class Test14 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String str1 = new String("Welcome to Tutorialspoint.com");
		char[] str2 = new char[7];

		try {
			str1.getChars(2, 9, str2, 0);
			System.out.print("copied Value = ");
			System.out.println(str2);
		} catch (Exception ex) {
			System.out.println("Raised exception...");

		}

	}

}
