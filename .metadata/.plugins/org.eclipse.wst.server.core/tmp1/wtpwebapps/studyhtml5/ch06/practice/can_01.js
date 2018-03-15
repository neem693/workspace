/**
 * 
 */

$(document).ready(function() {
	drawShape();
});

function drawShape() {
	// canvas 엘리먼트 객체를 얻어내서 cvs 객체 변수에 저장
	var cvs = $("#c1")[0];
	// cvs객체의 getContext("2d") 메소드를 사용해서 2D 콘텍스트를 얻어냄.
	cvs.width = 500;
	cvs.height = 1000;
	var ctx = cvs.getContext("2d");
	// 사각형 그리기
	ctx.fillStyle = "#00FFFF";// 채우기 색 지정
	ctx.fillRect(10, 10, 80, 50);// 채워진 사각형
	ctx.strokeStyle = "#0000FF";// 선 색 지정
	ctx.strokeRect(100, 10, 80, 50);// 속이 빈 사각형

	// 글자 그리기
	ctx.font = "40px Arial";// 글꼴 크기와 폰트
	ctx.strokeText("Hello", 200, 50);// 테두리만 있는 글자
	ctx.fillText("테스트", 300, 50);// 색이 채워진 글자
	
	// 채워진 삼각형 그리기
	ctx.fillStyle = "#000000";
	ctx.beginPath();
	ctx.moveTo(75, 150);
	ctx.lineTo(100, 175);
	ctx.lineTo(100, 125);
	ctx.fill();// 속 채운다.

	// 웃는 얼굴 그리기
	ctx.strokeStyle = "#000000";
	ctx.beginPath();
	ctx.arc(175, 175, 50, 0, Math.PI * 2, true);// 얼굴
	ctx.moveTo(210, 175);
	ctx.arc(175, 175, 35, 0, Math.PI, false);// 입
	ctx.moveTo(165, 165);
	ctx.arc(160, 165, 5, 0, Math.PI * 2, true);// 왼쪽 눈
	ctx.moveTo(195, 165);
	ctx.arc(190, 165, 5, 0, Math.PI * 2, true);// 오른쪽 눈
	ctx.stroke();// 테두리 그린다.

	ctx.font =  "15px 고딕";
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	ctx.fillStyle = "#000000";
	ctx.fillText("x값 200,y값 500", 200, 500);

	ctx.fillText("x값 200,y값 300", 200, 300);

	ctx.fillText("x값 100,y값 400", 100, 400);

	ctx.fillText("x값 300,y값 400", 300, 400);

	var radius = 100;
	ctx.translate(250,700);
	for(var n=1; n<=12 ;n++){
		var degree = n*Math.PI/6;
		ctx.rotate(degree);
		ctx.translate(0,-radius *0.75);
		ctx.rotate(-degree);
		
		ctx.fillText(n.toString(),0,0);
		ctx.rotate(degree);
		ctx.translate(0,radius *0.75);
		ctx.rotate(-degree);
				
	}
	
	var cvs = $("#c2")[0];
	// cvs객체의 getContext("2d") 메소드를 사용해서 2D 콘텍스트를 얻어냄
	var ctx = cvs.getContext("2d");

	// 패턴을 생성하고 적용
	var image = new Image();// Image 객체 생성
	image.src = "../../images/pattern5.jpg";// 이미지 파일 지정
	image.onload = function() {// 이미지가 로딩되면 자동 실행
		var ptn = ctx.createPattern(image, 'repeat');// 패턴 생성
		ctx.rect(0, 0, 400, 200);// 사각형 생성
		ctx.fillStyle = ptn;// 채우기 스타일로 패턴을 지정
		ctx.fill();// 패턴으로 사각형 채우기

	}
}