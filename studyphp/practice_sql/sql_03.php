<?php

if (!function_exists('pdo_init') && !extension_loaded('pdo')) {
	echo 'PDO가 없다.<br>';
} else {
	echo 'PDO가 잘 작동하고 있다.<br>';
}

include 'sql_info_2.php';

try {
	$conn = new PDO("mysql:host=$host;", $id, $password);
	// set the PDO error mode to exception
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	echo "Connected successfully<br>";
}
catch(PDOException $e)
{
	echo "Connection failed: " . $e->getMessage()."<br>";
}
$conn=null;
?>