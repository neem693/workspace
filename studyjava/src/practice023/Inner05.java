package practice023;




public class Inner05 {
	
	static class Nested_Demo{
		public void my_method() {
			System.out.println("This is my nested class");
		}
	}
	
	public static void main(String[] args) {
		Inner05.Nested_Demo nested = new Inner05.Nested_Demo();
		nested.my_method();
	}
}
