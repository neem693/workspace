package practice016_ex;

public class Test09 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String str = new String("This is really not immutable!!");
		boolean retVal;
		
		retVal = str.endsWith("immutable!!");
		System.out.println("Returned Value = " + retVal);
		
		retVal = str.endsWith("immu");
		System.out.println("Returned Value = " + retVal);
		

	}

}
