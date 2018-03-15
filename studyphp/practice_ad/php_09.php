<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width,initial-scale = 1.0" />
<title>date</title>
</head>
<body>
 <?php
	$d = strtotime ( "tomorrow" );
	echo date ( "Y-m-d h:i:sa", $d ) . "<br>";
	
	$d = strtotime ( "next Saturday" );
	echo date ( "Y-m-d h:i:sa", $d ) . "<br>";
	
	$d = strtotime ( "+3 Months" );
	echo date ( "Y-m-d h:i:sa", $d ) . "<br>";
	?> 
</body>
</html>

