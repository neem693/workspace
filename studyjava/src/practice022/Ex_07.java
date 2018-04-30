package practice022;

import java.io.DataOutputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;

public class Ex_07 {

	public static void main(String[] args) {

		try (FileReader fr = new FileReader("output.txt")) {

			char[] a = new char[50];
			fr.read(a);
			for (char c : a) {
				if(c==0)
					break;
				System.out.print(c);
			}

		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
