package practice016_ex;

public class Test06 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String str1 = "Not immutable";
		String str2 = "Strings are immutable";
		StringBuffer str3 = new StringBuffer("Not immutable");
//StringBuffer 클래스 사용		
		boolean result = str1.contentEquals(str3);
		System.out.println(result);
		
		result = str2.contentEquals(str3);
		System.out.println(result);

	}

}
