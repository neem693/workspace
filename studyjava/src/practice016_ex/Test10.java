package practice016_ex;

public class Test10 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String str1 = new String("This is really not immutable!!");
		String str2 = str1;
		String str3 = new String("This is really not immutable!!");
		boolean retVal;
		
		retVal = str1.equals(str2);
		System.out.println("Returned Value = " + retVal);
		
		retVal = str1.equals(str3);
		System.out.println("Returned Value = " + retVal);

	}

}
