/**
 * 
 */

$(document).ready(function() {
	drawShape();
	drawgrd();
});

function drawShape() {
	var cvs = $("#canvas")[0];
	var ctx = cvs.getContext("2d");// cvs객체의 getContext("2d")메소드를 사용해서 2D 콘텍스트를
									// 얻어냄

	var image = new Image();// 객체 생성
	image.src = "../../images/steam_logo.gif";// steam_logo.gif이미지파일 지정
	image.onload = function() {// 이미지가 로딩되면 자동 실행
		ctx.drawImage(image, 0, 0);// 캔버스의 (0,0) 좌표에 이미지를 그린다.
	}
}

function drawgrd() {
	var cvs = $("#canvas1")[0];
	var ctx = cvs.getContext("2d");

	
	/*var grd = ctx.createLinearGradient(0, 0, 170, 0);
	grd.addColorStop(0, "black");
	grd.addColorStop(1, "white");

	ctx.fillStyle = grd;
	ctx.fillRect(20, 20, 150, 100);
	*/
	
	
	var grad = ctx.createLinearGradient(0,0,180,180);
	grad.addColorStop(0,"blue");//제1 색상 지점
	grad.addColorStop(1,"white");//제2 색상 지점
	ctx.fillStyle = grad; //채우기 색으로 그러데이션 지정
	ctx.fillRect(20,20,200,100);//채워진 사각형 그린다. 

}
