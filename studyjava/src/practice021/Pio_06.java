package practice021;

import java.io.File;

public class Pio_06 {

	public static void main(String[] args) {
		File file = null;
		String[] paths;

		try {
			file = new File("/tmp");

			paths = file.list();
			for (String path : paths) {
				System.out.println(path);
			}

		} catch (Exception e) {
			// if any error occurs
			e.printStackTrace();
		}

	}

}
