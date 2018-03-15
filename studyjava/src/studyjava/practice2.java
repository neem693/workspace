package studyjava;

public class practice2 {
	public static void main(String[] args){
		String text = "Love is a variety of different feelings, states, and" + "attutudes that ranges from interpersonal affection to pleasure.";
		int cnt = 0;
		for(int i=0; i<text.length(); i++)
			if(text.charAt(i) == 'a'){
				cnt ++;
				System.out.println(text.substring(i-1, i+5));
			}
		System.out.println("a문자 : " + cnt);
	}

}
