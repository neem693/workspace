package practice016_ex;

public class Test11 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String str1 = new String("This is really not immutable!!");
		String str2 = str1;
		String str3 = new String("This is really not immutable!!");
		String str4 = new String("This IS REALLY NOT IMMUTABLE!!");
		boolean retVal;
		
		retVal = str1.equals(str2);
		System.out.println("Returned Value = " + retVal);
		
		retVal = str1.equals(str4);//여기 좀 다르게 했다.
		System.out.println("Returned Value = " + retVal);
		
		retVal = str1.equalsIgnoreCase(str4);
		System.out.println("Returned Value = " + retVal);

	}

}
