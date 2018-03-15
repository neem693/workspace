<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0"/>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%
String id = request.getParameter("id");
String enckey = request.getParameter("enckey");

out.println("아이디 : " + id + "<br>");
out.println("암호화 : " + enckey);

%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

</body>
</html>