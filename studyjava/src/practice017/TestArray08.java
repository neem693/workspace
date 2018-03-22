package practice017;

import java.util.Arrays;

public class TestArray08 {

	public static int[] reverse(int[] array) {
		int[] result = new int[array.length];

		for (int i = 0, j = result.length - 1; i < array.length; i++, j--) {
			result[i] = array[j];
		}

		return result;
	}

	public static void main(String[] args) {
		int[] array = { 23, 45, 67, 43, 47, 31, 30, 27 };
		System.out.println("오름차순 정렬하기");
		Arrays.sort(array);
		for (int i : array)
			System.out.print(i + ",");
		System.out.println();
		System.out.println("내림차순 정렬하기");

		array = reverse(array);
		for (int i : array)
			System.out.print(i + ",");

	}

}
