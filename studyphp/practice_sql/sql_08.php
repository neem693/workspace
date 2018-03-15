<?php

require 'sql_info_2.php';

try{
	$conn = new PDO("mysql:host=$host;dbname=$dbname",$id,$password);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
	$conn->beginTransaction();
	
	$conn->exec("insert into myguests(firstname,lastname,email) values('kyh','kut','kyh@bratwint.com')");
	
	$conn->exec("insert into myguests(firstname,lastname,email) values('yohan','kut','yohan@bratwint.com')");
	
	$conn->exec("insert into myguests(firstname,lastname,email) values('hyenjin','kut','hyenjin@bratwint.com')");
	
	$conn->commit();
	echo "success";
}
catch(PDOException $e){
	$conn->rollBack();
	echo "error<br>".$e->getMessage();
}


?>