package practice016_ex;

import java.io.*;

public class Test20 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String str1 = new String("welcome to Tutorialspoint.com");
		String str2 = new String("WELCOME TO TUTORIALSPOINT.COM");

		System.out.print("Canoncial representation:");
		System.out.println(str1.intern());

		System.out.print("Canoncial representation:");
		System.out.println(str2.intern());

	}
}