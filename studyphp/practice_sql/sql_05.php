<?php
require 'sql_info_2.php';

try {
	$conn = new PDO ( "mysql:host=$host;dbname=$dbname", $id, $password );
	// try connection
	$conn->setAttribute ( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	// sql create
	$sql = "create table MyGuests(
id int(6) unsigned auto_increment primary key,
firstname varchar(30) not null,
lastname varchar(30) not null,
email varchar(30) unique,
reg_date timestamp)";
	
	$conn->exec($sql);
	echo "$sql is successfully";
}
catch(PDOException $e){
	echo $sql."<br>".$e->getMessage();
}

$conn=null;

?>