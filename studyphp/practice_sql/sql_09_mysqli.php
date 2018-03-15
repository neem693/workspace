<?php
require 'sql_info_2.php';
// create connection
$conn = new mysqli ( $host, $id, $password, $dbname );
// cechk connection
if ($conn->connect_error) {
	die ( "connection failed: " . $conn->connect_error );
}

// prepare and bind
$stmt = $conn->prepare ( "insert into myguests(firstname,lastname,email)values(?,?,?)" );
$stmt->bind_param ( "sss", $firstname, $lastname, $email );

$firstname = "철수";
$lastname = "김";
$email = "chelsu@bratwint.com";
$stmt ->execute();

$firstname = "영환";
$lastname = "김";
$email = "yyho@bratwint.com";
$stmt ->execute();

$firstname = "리아";
$lastname = "김";
$email = "ria@bratwint.com";
$stmt ->execute();

echo "New records created successfully";

$stmt->close();
$conn->close();




?>