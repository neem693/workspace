<?php

if (!function_exists('mysqli_init') && !extension_loaded('mysqli')) {
	echo 'MYSQLi를 가지고 있지 않다.<br>';
} else {
	echo 'MYSQLi가 잘 작동하고 있다.<br>';
}

$servername = "localhost";
$username = "root";
$password = "2011180137";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
$conn->close();
?> 