package practice016_ex;

public class Test04 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String str1 = "Strings are immutable";
		String str2 = "strings are immutable";
		String str3 = "Intergers are not immutable";
		
		int result = str1.compareToIgnoreCase(str2);
		System.out.println(result);
		
		result = str2.compareToIgnoreCase(str3);
		System.out.println(result);
		
		result = str3.compareToIgnoreCase(str1);
		System.out.println(result);

	}

}
