package practice016_ex;

public class Test02 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String str1 = "Strings are immutable";
		String str2 = new String("Strings are immutable");
		String str3 = new String("Integers are not immuatble");
		
		int result = str1.compareTo(str2);
		System.out.println(result);
		
		result = str2.compareTo(str3);
		System.out.println(result);

	}

}
