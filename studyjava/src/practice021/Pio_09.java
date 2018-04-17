package practice021;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

public class Pio_09 {

	public static void main(String[] args) throws IOException {
		ByteArrayOutputStream bOutput = new ByteArrayOutputStream(12);

		while (bOutput.size() != 10)
			bOutput.write("hello".getBytes());
		byte b[] = bOutput.toByteArray();
		System.out.println("Print the content");

		for (int i = 0; i < b.length; i++) {
			System.out.print((char) b[i] + "   ");
		}
		System.out.println("  ");

		int c;
		ByteArrayInputStream bInput = new ByteArrayInputStream(b);
		System.out.println("Converting characters to Upper case ");

		for (int i = 0; i < 1; i++) {
			while ((c = bInput.read()) != -1) {
				System.out.println(Character.toUpperCase((char) c));
			}
			bInput.reset();

		}

	}

}
