<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name = "viewport" content = "width=device-width,initial-scale = 1.0"/>
<link rel = "stylesheet" href = "/studyphp/style.css">
<title>연습_PHP</title>
</head>
<body>


<?php

require 'sql_info_2.php';

try{
	$conn = new PDO("mysql:host=$host;dbname=$dbname",$id,$password);
	$conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
	$sql = "update myguests set lastname = :update where id = :id";
	$stmt=$conn->prepare($sql);
	$stmt->bindParam(":update", $update);
	$stmt->bindParam(":id", $id);
	
	$update = "SEMU";
	$id = 8;
	$stmt->execute();
	
	echo $stmt->rowCount(). "레코드 변경 성공";

	
	
}
catch (PDOException $e){
	echo "$sql <br>에러가 발생했다. 이유:".$e->getMessage();
}



?>


</body>
</html>