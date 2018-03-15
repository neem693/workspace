package practice011;

public class Car extends Vehicle{

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Vehicle a = new Car();
		boolean result = a instanceof Car;
		System.out.println(result);

	}

}
