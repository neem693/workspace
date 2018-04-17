package practice021;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class Pio_08 {

	public static void main(String[] args) throws IOException {
		File d = new File("/practice021");
		System.out.println(d.mkdirs());
		DataOutputStream dataOut = new DataOutputStream(new FileOutputStream("/practice021/file.txt"));
		dataOut.writeUTF("업체 직원은 “미리 만들어 놓은 것은 없지만, 주문하면 제작할 수 있다”고 했다. “아이디만 있으면 컴퓨터가 몇 대든 무제한으로 쓸 수 있다. 다만 우리 프로그램은 네이버를 로그인 해서 쓰는 방식이어서, 아이디가 별도로 있어야 한다. 인터넷 검색하면 네이버 아이디를 파는 업체들이 많다.” 실제 찾아보니, 네이버 아이디뿐만 아니라 카톡이나 밴드 아이디 등을 판다는 글이 인터넷에 넘쳐났다.\r\n" + 
				"\r\n" + 
				"이들은 추가로 컴퓨터와 구형 스마트폰이 필요하다고 했다. “아이피(IP)를 바꿔야 한다. 똑같은 아이피로 하면 네이버에 걸린다. 스마트폰이 아이피를 바꾸는 역할을 한다.” 네이버는 한 아이피에서 여러 아이디가 접속하는 것을 거르는 장치를 두고 있다. 매크로 방어 장치 중 하나다. 이를 우회하는 방법으로 이 업체는 구형 스마트폰을 쓴다. “유선 랜으로 접속하면 아이피가 하나라 금세 차단된다. 스마트폰의 테더링으로 인터넷을 할 경우 아이피를 계속 변경할 수 있다. 다만 최신 스마트폰은 보안이 세서 잘 안 되고, 구형 폰인 갤럭시노트2나 노트3, 갤럭시S3를 써야 한다.” 이 업체는 아이피 변경에 스마트폰을 쓰지만, 이외에 자동 아이피 변경장치도 널리 쓰이는 것으로 알려졌다.\r\n" + 
				"\r\n" + 
				"이렇게 네이버 아이디와 스마트폰, 컴퓨터 등 세 가지를 갖추면 네이버 기사의 댓글 등을 인위적으로 조작할 수 있는 조건이 마련된 셈이다. 여기에 업체가 만든 프로그램을 깔면 댓글 조작이 가능하다는 게 업체 쪽 설명이다. “기사를 찾아서 댓글을 달고 공감을 누르는 데 2~3분이 소요된다. 규모가 작으면 컴퓨터 한 대면 되지만, 홍보 대행사처럼 할 경우 10세트 정도 설치하면 훨씬 빨리 할 수 있다.” 산술적으로 컴퓨터 100대를 돌릴 경우 2분이면 한 기사에 댓글과 공감 100개를 달 수 있다고 했다. 기계를 돌리는 인원은 한 명이면 가능하다.\r\n" + 
				"\r\n" + 
				"설치는 원격으로 진행한다. “우리는 현재 중국에 있다. 한국에서는 법적으로 문제가 될 소지가 커서, 다들 중국에 건너와서 작업한다. 설치도 직접 하지 않고 원격으로 진행한다. 500만원 입금하면 금방 된다.” 최근 민주당원 댓글 조작 사태로 경찰 수사가 진행되고 있어 업체들이 몸을 사리고 있다고 했다. “정치와 관련한 일은 요즘 잘 하지 않는다. 최근 이슈가 돼서 위험하다. 그거 안 해도 요즘 너무 바쁘다. 하루에도 전화가 수십 통씩 온다.”\r\n" + 
				"\r\n" + 
				"원문보기:\r\n" + 
				"http://www.hani.co.kr/arti/economy/economy_general/840872.html?_fr=mt1#csidx7046e065f2ddb6bbf99aa10b06fb05f ");
		
		DataInputStream dataIn = new DataInputStream(new FileInputStream("/practice021/file.txt"));
		
		while(dataIn.available()>0) {
			String k = dataIn.readUTF();
			System.out.print(k+ " ");
		}

	}

}
