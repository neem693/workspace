<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width,initial-scale = 1.0" />
<link rel="stylesheet" href="/studyphp/style.css">
<title>연습_PHP</title>
</head>
<body>
<?php
require 'sql_info_2.php';

try {
	$q = intval ( $_GET ['q'] );
	$conn = new PDO ( "mysql:host=$host;dbname=$dbname", $id, $password );
	$conn->setAttribute ( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	echo "연결성공<br><br>";
	$sql= "select * from practice_gue where id = $q";
	echo $sql."<br><br>";
	$stmt = $conn->prepare($sql);
	$stmt->execute();
	
	$result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
	echo "<table><tr><th>FirstName</th><th>LastName</th><th>age</th><th>Hometown</th><th>job</th></tr>";
	while($row=$stmt->fetch()){
		echo var_dump($row);
		echo"<tr><td>".$row['FirstName']."</td><td>".$row['LastName']."</td><td>".$row['Age']."</td><td>".$row['HomeTown']."</td><td>".$row['job']."</td></tr>";
	}
	echo "</table>";
}
catch(PDOException $e){
	echo "오류발생 이유:".$e->getMessage();
}

$conn = null;

?>


</body>
</html>