/**
 * 
 */

var ctx;
var radius;


$(document).ready(function() {
	drawAnimation();
});

function drawAnimation() {
	// 기본
	
	var cvs = $("#can")[0];
	ctx = cvs.getContext("2d");
	var width = cvs.width/2;

	radius = cvs.height / 2;

	

	/*
	 * createRadialGradient(x0,y0,r0,x1,y1,r1)
	 * 
	 * x0 The x-coordinate of the starting circle of the gradient
	 * 
	 * y0 The y-coordinate of the starting circle of the gradient
	 * 
	 * r0 The radius of the starting circle
	 * 
	 * x1 The x-coordinate of the ending circle of the gradient
	 * 
	 * y1 The y-coordinate of the ending circle of the gradient
	 * 
	 * r1 The radius of the ending circle
	 */
	ctx.strokeRect(width - radius,0,radius*2,radius*2);
	ctx.translate(width, radius);// 중심점을 정중앙으로 옮김
	radius = radius *0.90 // 캔버스에 그려지는 시게를 캔버스 크기의 90%크기로 설정
	setInterval(drawClock, 1000);// 1초마다 drawClock()함수 호출

}



// 애니메이션 작업 함수
function drawClock(){
	drawShape();// 시계 모양 그리는 함수
	drawNumbers();// 시간을 그리는 함수
	drawTime();// 시침,분침,초침을 그리는 함수
}

// 시계 모양 그리는 함수 - 시계 배경과 테두리르 그림
function drawShape(){
	// 시계의 배경이 되는 흰색 원을 그림
	ctx.beginPath();
	ctx.arc(0,0,radius, 0, 2*Math.PI);
	ctx.fillStyle = "#FFFFFF";
	ctx.fill();
	
	// 시계테두리를 금속의 느낌을 갖도록 그라디언트를 지정하고 적용
	var grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
	grad.addColorStop(0, "#333333");
	grad.addColorStop(0.5, "#FFFFFF");
	grad.addColorStop(1, "#333333");
	ctx.strokeStyle = grad;
	ctx.lineWidth = radius*0.1;
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(0,0,radius*0.1, 0, 2*Math.PI);
	ctx.fillStyle = "#333333";
	ctx.fill();
}

function drawNumbers(){
	// 시간과 글꼴과 글자의 맞춤을 지정
	ctx.font = radius*0.15 + "px 고딕";
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	
	// 1시~12시까지 시간을 게산한 위치에 그림
	$("#sub").text("");
	for(var num = 1; num<=12; num++){
		var ang = num*Math.PI/6;//Math.PI/6은 30도를 의미한다.
		ctx.rotate(ang);
		
		ctx.translate(0,-radius*0.85);
		ctx.rotate(-ang);
		
		ctx.fillText(num.toString(),0,0);
		ctx.rotate(ang);
		ctx.translate(0,radius*0.85);
		ctx.rotate(-ang);
		
	}
}

function drawTime(){
	// 현재의 시간을 얻어내서 hour,minute,second 변수에 저장
	var now = new Date();// 현재 시간을 얻어냄
	var hour = now.getHours();// 시간
	var minute = now.getMinutes();// 분
	var second = now.getSeconds();// 초
	
	// 시침, 분침, 초침의 위치 값을 계산
	ctx.strokeStyle = "#000000";// 시침, 분침의 색은 검정
	// 시침 계산
	hour = hour %12;
	hour = (hour * Math.PI/6) + (minute * Math.PI/(6*60)) + (second * Math.PI/(360*60));
	
	drawStroke(hour,radius*0.5, radius*0.07);// 시/분/초침을 그리는 함수 호출
	
	
	// 분침 계산
	minute = (minute * Math.PI/30) + (second * Math.PI/(30*60));
	drawStroke(minute, radius*0.8, radius*0.07);
	// 초침 계산
	ctx.strokeStyle = "#FF0000";// 초침의 색을 빨강
	second = (second * Math.PI/30);
	drawStroke(second, radius * 0.9, radius * 0.02);
	
	
}

// 시침, 분침, 초침의 값을 그리는 함수

function drawStroke(pos,length, width){
	ctx.beginPath();
	ctx.lineWidth = width;
	ctx.lineCap = "round";
	ctx.moveTo(0,0);
	ctx.rotate(pos);
	ctx.lineTo(0, -length);
	ctx.stroke();
	ctx.rotate(-pos);
	
}





