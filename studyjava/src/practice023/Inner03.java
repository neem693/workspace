package practice023;

public class Inner03 {

	void my_Method() {
		int num = 23;

		class MethodInner_Demo {
			public void print() {
				System.out.println("This is method inner class " + num);
			}
		}
		
		MethodInner_Demo inner = new MethodInner_Demo();
		inner.print();
	}

	public static void main(String[] args) {
		Inner03 outer = new Inner03();
		outer.my_Method();
	}
}