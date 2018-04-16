package practice021;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class Pio_01 {

	public static void main(String[] args) throws IOException{
		FileInputStream in = null;
		FileOutputStream out = null;
		if(new File("input.txt").exists())
			System.out.println("있다.");
		else {
			System.out.println("없다");
			return;
		}
		
		try {
			in = new FileInputStream("input.txt");
			out = new FileOutputStream("output.txt");
			
			int c;
			while((c= in.read()) != -1) {
				out.write(c);
			}
		}finally {
			if(in != null) {
				in.close();
			}
			if(out != null) {
				out.close();
			}
		}
	}
}
