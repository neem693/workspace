package practice018;

import java.util.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

public class DateDemo06 {

	public static void main(String[] args) {

		SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-DD");
		String input = args.length == 0 ? "1818-11-11" : args[0];

		System.out.println(input + " Pares as ");
		Date t;

		try {
			t = ft.parse(input);
			System.out.println(t);
		} catch (ParseException e) {
			System.out.println("Unparseable using" + ft);
		}

	}

}
