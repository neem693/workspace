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
	$d = mktime ( 11, 14, 54, 8, 12, 2014 );
	echo "Created date is " . date ( "Y-m-d h:i:sa", $d );
	?> 

</body>
</html>

