package practice021;

import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Pio_12 {

	public static void main(String[] args) throws IOException {
		File file = new File("Hello1.txt");

		file.createNewFile();

		FileWriter writer = new FileWriter(file);

		writer.write("This\n is\n an\n example\n");
		writer.flush();
		writer.close();
		
		FileReader fr = new FileReader(file);
		char [] a = new char[50];
		fr.read(a);
		
		for(char c : a)
			System.out.print(c);
		fr.close();

	}

}
