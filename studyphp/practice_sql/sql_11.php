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

$conn=new mysqli($host,$id,$password,$dbname);
//echo var_dump($conn->connect_error);
if($conn->connect_error){
	die("die Connection faild:".$conn->connect_error);
}

/*$stmt = $conn->prepare("delete from myguests where id = ?");
$stmt->bind_param("i",$id_num);

$id_num = 12;
$stmt->execute();

$stmt->close();
$conn->close();
*/
$sql = "delete from myguests where id = 12";

if($conn->query($sql)===true){
	echo "Record deleted successfully";
}else{
	echo "Error deleted message".$conn->error;
}

$conn->close();

?>


</body>
</html>