<%@ page language="java"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!--<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
-->
<html>
<head>

<title>파일 업로드 예제</title>
</head>
<body>



	<form name="fileForm" method="post" enctype="multipart/form-data" action="fileUpload.jsp">
		작성자: <input type="text" name="user"> <br> 제목
		: <input type="text" name="title"><br> 파일명: <input
			type="file" name="uploadFile"><br> <input
			type="submit" value="파일 올리기">
	</form>

</body>
</html>