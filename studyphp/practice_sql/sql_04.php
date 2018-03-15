<?php
include 'sql_info_1.php';
// create connection
try {
	
	$conn = new PDO ( "mysql:host=$host;", $id, $password );
	// set the PDO error mode to exception
	
	$conn->setAttribute ( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	
	$sql = "create database TCT_TEST";
	// use exec() because no results are returned
	$conn->exec ( $sql );
	echo "$sql<br>Database created successfully<br>";
} catch ( PDOException $e ) {
	echo $sql . "<br>" . $e->getMessage ();
}

$conn = null;

?>