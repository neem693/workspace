package practice001;

public class FreshJuiceTest{
	public static void main(String[] args) {
		FreshJuice juice = new FreshJuice();
		juice.size = FreshJuice.FreshJuiceSize.MEDIUM;
		System.out.println("size: " + juice.size);
	}

}