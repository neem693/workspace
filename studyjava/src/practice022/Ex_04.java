package practice022;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

public class Ex_04 {

	public static void main(String[] args) {
		InputStream file;
		try {
			file = new FileInputStream("filename.txt");
		}catch(IOException i ) {
			i.printStackTrace();
			return;
		}catch(RuntimeException f) {
			f.printStackTrace();
			return;
		}

	}

}
