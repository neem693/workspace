package practice017;

import java.util.Arrays;

public class TestArray07 {

	
	
	
	
	
	public static void main(String[] args) {
		int [] array = {23,45,67,43,47,31,30,27};
		System.out.println("부분채우기");
		Arrays.fill(array,3,6,89);
		for(int i: array) 
			System.out.print(i + ",");
		System.out.println();
		System.out.println("모두 채우기");
		Arrays.fill(array, 89);
		for(int i: array) 
			System.out.print(i + ",");
	}
	

}
