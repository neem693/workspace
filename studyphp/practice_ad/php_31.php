<?php
date_default_timezone_set ( "Asia/Seoul" );
$name_value = array (
		"date_cookie" => date ( "y년 m월 d일 h:i:sa" ),
		"equipment" => "sholve",
		"sex" => "m" 
);

foreach ( $name_value as $x => $x_v ) {
	setcookie ( $x, $x_v, time () + 3600, "/" );
}

?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width,initial-scale = 1.0" />
<title>연습_PHP</title>
</head>
<body>



<a href="php_31_1.php">이동</a>
	<p>코드는 밑과 같다.</p>
	<pre>$name_value = array (
		"date_cookie" => date ( "y년 m월 d일 h:i:sa" ),
		"equipment" => "sholve",
		"sex" => "m" 
);

foreach ( $name_value as $x => $x_v ) {
	setcookie ( $x, $x_v, time () + 3600, "/" );
}</pre>

</body>
</html>