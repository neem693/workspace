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


$conn = new mysqli($host,$id,$password,$dbname);
if($conn->connect_error){
	echo "연결실패 이유:".$conn->connect_error;
}

$sql = "update myguests set lastname ='NONE' where id = 3";

if($conn->query($sql)===true){
	echo "$sql 변경 오케이다";
	
}
else{
	echo "뭔가 잘모됬다. 이유:".$conn->error;
}

$conn->close();


?>


</body>
</html>

