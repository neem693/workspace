package practice018;

import java.util.Calendar;
import java.util.GregorianCalendar;

public class DateDemo09 {

	public static void main(String[] args) {

		String months[] = { "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" };

		int year;

		GregorianCalendar gcal = new GregorianCalendar();

		System.out.print("Date: ");
		System.out.print(months[gcal.get(Calendar.MONTH)]);
		System.out.print(" " + gcal.get(Calendar.DATE) + " ");
		System.out.println(year = gcal.get(Calendar.YEAR));
		System.out.print("Time: ");
		System.out.print(gcal.get(Calendar.HOUR) + ":");
		System.out.print(gcal.get(Calendar.MINUTE) + ":");
		System.out.println(gcal.get(Calendar.SECOND));

		if (gcal.isLeapYear(year))
			System.out.println("The current year is a leap year");
		else
			System.out.println("The current year is not a leap year");

	}

}
