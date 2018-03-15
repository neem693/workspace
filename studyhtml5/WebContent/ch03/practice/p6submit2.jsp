<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<% 
String id = request.getParameter("id");
String pass = request.getParameter("pass");

out.println("아이디는 " + id +"입니다.");
out.println("비밀번호는" + pass + "입니다.");

%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>아이디와 패스워드 받기</title>
</head>
<body>



</body>
</html>