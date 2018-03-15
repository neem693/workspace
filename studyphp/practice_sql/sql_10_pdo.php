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
echo "<table><tr><th>ID</th><th>Firstname</th><th>Lastname</th><th>email</th><th>reg_date</th></tr>";
class tablerows extends RecursiveIteratorIterator {
	function __construct($it) {
		parent::__construct ( $it, self::LEAVES_ONLY );
	}
	function current() {
		return "<td>" . parent::current () . "</td>";
	}
	function beginChildren() {
		echo "<tr>";
	}
	function endChildren() {
		echo "</tr>";
	}
}

require 'sql_info_2.php';

try {
	
	$conn = new PDO ( "mysql:host=$host;dbname=$dbname", $id, $password );
	$conn->setAttribute ( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	$sql = "select * from myguests";
	$stmt = $conn->prepare ( $sql );
	$stmt->execute ();
	
	$result = $stmt->setFetchMode ( PDO::FETCH_ASSOC );
	// echo var_dump ( $stmt->fetch() );
	while ( $rows = $stmt->fetch () ) {
		echo "<tr><td>" . $rows["id"] . "</td><td>" . $rows["firstname"] . "</td><td>" . $rows["lastname"] . "</td><td>" . $rows["email"] . "</td><td>" . $rows["reg_date"] . "</td></tr>";
	}
	echo "</table>";
	/*
	 * foreach ( new TableRows ( new RecursiveArrayIterator ( $stmt->fetchAll () ) ) as $k => $v ) {
	 * echo $v;
	 * }
	 */
} 
catch ( PDOException $e ) {
	echo "Error:" . $e->getMessage ();
}
$conn = null;

?>

</body>
</html>

