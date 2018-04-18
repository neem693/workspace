package practice021;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FilterInputStream;
import java.io.IOException;
import java.io.InputStream;

public class Pio_10 {

	public static void main(String[] args) throws IOException {
		DataOutputStream dataOut = new DataOutputStream(new FileOutputStream("/practice021/file.txt"));
		for (int i = 1; i < 6; i++) {
			dataOut.writeUTF("THIS iS TEST " + i + " ," );
		}
		
		DataInputStream dataIn = new DataInputStream(new FileInputStream("/practice021/file.txt"));
		
		while(dataIn.available()>0) {
			String k = dataIn.readUTF();
			System.out.println(k + " ");
		}
		//InputStream in = new DataInputStream(new InputStream ("/practice021/file.txt"));
	}

}
