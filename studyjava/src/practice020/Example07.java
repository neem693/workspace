package practice020;

public class Example07 {
	int num = 10;
	
	Example07(){
		System.out.println("This is an example program on keyword this");
	}
	Example07(int num){
		this();
		
		this.num  = num;
	}
	
	public void greet() {
		System.out.println("Hi Welcome to Tutorialspoint");
	}
	public void print() {
		int num =20;
		
		System.out.println("value of local variable num is : " + num);
		
		System.out.println("value of instance variable num is : " + this.num);
		
		this.greet();
	}
	

	public static void main(String[] args) {
	Example07 obj1 = new Example07();
	
	obj1.print();
	
	Example07 obj2 = new Example07(30);
	
	obj2.print();
	
		

	}

}
