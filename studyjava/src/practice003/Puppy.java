package practice003;

public class Puppy {
	String name;
	int age;
	public Puppy(String name) {
		System.out.println("누구냐? 내 애견의 이름이:" + name);
		this.name = name;

	}
	public void setAge(int age){
		this.age = age;
	}
	public int getAge(){
		System.out.println("우리 강아지 나이는 말이죠. 바로 이거랍니다.");
		return this.age;
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Puppy angel = new Puppy("냠냠이");
		
		angel.setAge(2);
		int age = angel.getAge();
		System.out.println(age +"살이요.");
		System.out.println("이름이 뭐라고요?");
		System.out.println(angel.name);
	}

}
