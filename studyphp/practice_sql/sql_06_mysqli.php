<?php
require 'sql_info_2.php';

$conn = new mysqli ( $host, $id, $password, $dbname );
if ($conn->connect_error) {
	die ( "Connection failed: " . $conn->connect_error );
}
$sql = "insert into myguests(firstname,lastname,email) values('mysql','my','mysqluser@bratwint.com')";

if ($conn->query ( $sql ) == true) {
	echo "new record created successfully";
} else {
	echo "Error:" . $sql . "<br>" . $conn->error;
}
$conn->close ();
?>