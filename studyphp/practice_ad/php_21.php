<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width,initial-scale = 1.0" />
<title>date</title>
</head>
<body>

	<h1>딴지일보(fopen)</h1>
 <?php
	$myfile = fopen ( "news.txt", "r" ) or die ( "Unable to open file!" );
	echo fgets( $myfile );
	fclose ( $myfile );
	?> 
 
</body>
</html>

