package practice022;

import java.io.File;
import java.io.FileReader;

public class Ex_01 {

	public static void main(String[] args) {
		File file = new File("test.txt");
		FileReader fr = new FileReader(file);
	}

}
