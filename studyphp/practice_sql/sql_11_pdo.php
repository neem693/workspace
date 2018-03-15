<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name = "viewport" content = "width=device-width,initial-scale = 1.0"/>
<link rel ="stylesheet" href = "style.css">
<title>연습_PHP</title>
</head>
<body>
<?php

require 'sql_info_2.php';

try{
	$conn = new pdo("mysql:host=$host;dbname=$dbname",$id,$password);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
	$sql = "delete from myguests where id=11";
	
	$conn->exec($sql);
	echo "Record delete successfully.";
}
catch(PDOException $e){
	echo $sql."<br>".$e->getMessage();
}

$conn = null;

?>


</body>
</html>