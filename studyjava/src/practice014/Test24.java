package practice014;

public class Test24 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		double degrees = 45.0;
		double radians = Math.toRadians(degrees);

		System.out.format("The value of pi is %.4f%n", Math.PI);
		System.out.format("The arcsine of %.4f is %.4f degrees %n", Math.cos(radians),
				Math.toDegrees(Math.atan(Math.sin(radians))));

	}

}
