<?php
require 'sql_info_2.php';

try {
	$conn = new PDO ( "mysql:host=$host;dbname=$dbname", $id, $password );
	$conn->setAttribute ( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	
	$sql = "insert into myguests(firstname,lastname,email) values('john','doe','john@bratwint.com')";
	$conn->exec ( $sql );
	$last_id = $conn->lastInsertId();
	echo "last id is $last_id";
} 
catch ( PDOException $e ) {
	echo "$sql is error <br>". $e->getMessage ();
}

$conn = null;

?>