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
	echo "<b>한국 시간대</b><br>";
	date_default_timezone_set ( "Asia/Seoul" );
	echo "The time is " . date ( "h:i:sa" );
	?> 


</body>
</html>

