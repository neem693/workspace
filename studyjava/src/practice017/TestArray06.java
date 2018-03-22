package practice017;

import java.util.Arrays;

public class TestArray06 {

	
	public static int[] copy_array(int [] one_array) {
		int [] result = new int[one_array.length];
		for(int i=0;i<one_array.length;i++)
			result[i] = one_array[i];
		return result;
	}
	
	
	
	
	public static void main(String[] args) {
		int [] array = {23,45,67,43,47,31,30,27};
		int [] result = copy_array(array);
		boolean same = Arrays.equals(array, result);
		
		System.out.println(same);
		
	}

}
