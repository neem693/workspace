package practice024;

class Calculation{
	int z;
	public void addition(int x, int y) {
		z = x + y;
		System.out.println("The sum of the given numbers : " + z);
	}
	public void subtraction(int x, int y) {
		z = x-y;
		System.out.println("The difference between the given numbers:" + z);
	}
}

public class Inheri01 extends Calculation{
	
	public void multiplication(int x,int y) {
		z = x* y;
		System.out.println("The product of the given numbers :" + z);
	}

	public static void main(String[] args) {
		

	}

}
