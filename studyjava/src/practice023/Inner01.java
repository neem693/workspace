package practice023;

class Outer_Demo1 {
	int num;

	private class Inner_Demo {
		public void print() {
			System.out.println("This is an inner class");
		}
	}

	void display_Inner() {
		Inner_Demo inner = new Inner_Demo();
		inner.print();
	}

}

public class Inner01 {
	public static void main(String[] args) {
		Outer_Demo1 outer = new Outer_Demo1();
		
		outer.display_Inner();

	}
}
