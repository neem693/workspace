package practice018;

import java.util.Date;

public class DateDemo05 {
	
	public static void main(String[] args) {
		
		Date date = new Date();
		
		System.out.printf("%s %tB %<te, %<tY","Due date:",date);
	}

}
