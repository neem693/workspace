package practice016_ex;

public class Test03 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String str1 = "String are immutable";
		String str2 = "String are immutable";
		String str3 = "Integers are not immutable";
		
		int result = str1.compareTo(str2);
		System.out.println(result);
		
		result = str2.compareTo(str3);
		System.out.println(result);
		
		result = str3.compareTo(str1);
		System.out.println(result);
	}

}
