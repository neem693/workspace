package practice021;

import java.io.File;

public class pio_05 {

	public static void main(String[] args) {

		String dirname = "/tmp/user/java/bin";
		File d = new File(dirname);
		System.out.println(d.mkdirs());
		

	}

}
