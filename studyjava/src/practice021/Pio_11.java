package practice021;

import java.io.File;

public class Pio_11 {

	public static void main(String[] args) {
		File f = null;
		String[] strs = { "test.txt", "test2.txt" };
		try {
			for (String s : strs) {
				f = new File(s);
				boolean bool = f.canExecute();
				String a = f.getAbsolutePath();
				System.out.println(a);
				System.out.println(" is executable : " + bool);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
