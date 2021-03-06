package practice017;

import java.util.Arrays;

public class TestArray04 {

	public static int[] reverse(int[] list) {
		int[] result = new int[list.length];
		for (int i = 0, j = result.length - 1; i < list.length; i++, j--) {
			result[j] = list[i];
		}
		return result;
	}

	public static void main(String[] args) {
		int[] array = { 23, 45, 67, 43, 47, 31, 30, 27 };
		int[] array_reverse;
		array_reverse = reverse(array);
		for (int i : array_reverse) {
			System.out.print(i+ ", ");
		}
	}

}
