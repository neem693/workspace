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
echo "<table>";
function Errorfunction($errno, $errstr, $ef, $el) {
	echo "<b>Error:</b> [$errno] $errstr $el line<br>";
	echo "Ending Script<br>";
}
set_error_handler ( "Errorfunction" );
require 'sql_info_2.php';

$conn = new mysqli ( $host, $id, $password, $dbname );

if ($conn->connect_error) {
	die ( "connetion failed" . $conn->connect_error );
}

$sql = "select id,firstname,lastname from myguests";
$result = $conn->query ( $sql );

if ($result->num_rows > 0) {
	echo "<table><tr><th>ID</th><th>LASTNAME</th><th>FIRSTNAME</th></tr>";
	while ( $row = $result->fetch_assoc() ) {
		
		echo "<tr><td>" . $row ['id'] . "</td><td>" . $row ['lastname'] . "</td><td>" . $row ['firstname'] . "</td></tr>";
	}
	echo "</table>";
}
else{
	echo "result 0";
}

$conn->close();

?>

</body>
</html>

