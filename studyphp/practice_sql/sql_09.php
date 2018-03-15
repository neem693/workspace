<?php
require 'sql_info_2.php';

try {
	$conn = new PDO ( "mysql:host=$host;dbname=$dbname", $id, $password );
	$conn->setAttribute ( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	
	$stmt = $conn->prepare ( "insert into myguests(firstname,lastname,email) values(:firstname,:lastname,:email)" );
	$stmt->bindParam ( ':firstname', $firstname );
	$stmt->bindParam ( ':lastname', $lastname );
	$stmt->bindParam ( ':email', $email );
	
	$firstname = "명박";
	$lastname = "이";
	$email = "myng@bratwint.com";
	$stmt->execute ();
	
	$firstname = "근혜";
	$lastname = "박";
	$email = "bark@bratwint.com";
	$stmt->execute ();
	
	$firstname = "윤회";
	$lastname = "정";
	$email = "yun_hei@bratwint.com";
	$stmt->execute ();
	
	echo "New records created successfully";
} catch ( PDOException $e ) {
	echo "Error: " . $e->getMessage ();
}

$conn = null;
?>