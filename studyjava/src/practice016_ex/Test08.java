package practice016_ex;

public class Test08 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		char [] str1 = {'h','e','l','l','o',' ','w','o','r','l','d'};
		String str2 = "";
		str2 = str2.copyValueOf(str1,2,6);
		System.out.println("Returned String: " + str2);

	}

}
