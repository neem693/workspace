package practice023;

interface Message {
	String greet();
}


public class Inner04 {
	
	public void displayMessage(Message m) {
		System.out.println(m.greet() + ", This is an example of anonymous inner class as an argument");
		
	}
	

	public static void main(String[] args) {
		Inner04 obj = new Inner04();
		
		obj.displayMessage(new Message() {
			public String greet() {
				return "Hello";
			}
		});

	}

}
