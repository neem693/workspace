<%@ page language="java"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta name="viewport"
	content="width=device-width, initial-scale=1.0" />
<%
	String artist;
	String art;
	int a =1;

	artist = request.getParameter("artist");
	art = request.getParameter("art");
	
	
	if(artist.length()<15 && art.length() <20){
		out.println(artist +" - " + art);
		
	}
	else{
		out.println("파일이름이 너무 깁니다.");
	}
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type"
	content="text/html; charset=UTF-8">
<title>호호호호호호</title>
</head>
<body>



</body>
</html>