package practice020;



public class Example03 {

	public static void main(String[] args) {
		int a = 30;
		int b = 45;
		System.out.println("Before sawpping , a= " + a + "and b = " +b);
		
		swapFunction(a,b);
		System.out.println("\n**Now, Before and After swapping values will be same here**:");
		System.out.println("After swapping, a = " + a + " and b is " +b);
		
		//Invoke the sawp method
		
		
		
	}
	
	public static void swapFunction(int a,int b) {
		System.out.println("Before swapping(Inside), a =" + a + " b = " +b);
		
		int c =a;
		a=b;
		b=c;
		System.out.println("After swapping(Inside), a= " + a + " b = " + b);
	}

}