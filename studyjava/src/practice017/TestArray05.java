package practice017;

import java.util.Arrays;

public class TestArray05 {

	
	public static void main(String[] args) {
		int [] array = {23,45,67,43,47,31,30,27};
		Arrays.sort(array);
		for(int i :array) {
			System.out.println(i);
		}
		
		int result = Arrays.binarySearch(array, 45);
		System.out.println(result);
	}

}
