<?php
include 'sql_info_2.php';

try {
	$conn = new PDO ( "mysql:host=$host;dbname=$dbname", $id, $password );
	// connection
	$conn->setAttribute ( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	$sql = "insert into myguests(firstname,lastname,email) values('ora','tree','oratree@bratwint.com')";
	$conn->exec ( $sql );
	echo "$sql <br> is successfully";
} catch ( PDOException $e ) {
	echo $sql . "<br>" . $e->getMessage ();
}
$conn = null;
?>