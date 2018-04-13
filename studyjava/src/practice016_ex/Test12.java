package practice016_ex;

import java.io.*;

public class Test12 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String str1 = new String("Welcome to Tutorialspoint.com");

		String str2 = new String(str1.getBytes());
		System.out.println("Returned Value :" + str2);
		System.out.println("아스키 코드로 다음과 같다. (바이트숫자 문자)");
		byte[] bstr = str1.getBytes();
		for (byte b : bstr)
			System.out.print(" " + b + " " + (char) b);

	}

}
