 <?php
	$cars = array (
			"Volvo",
			"BMW",
			"Toyota" 
	);
	$c = count($cars);
	for($x=0;$x<$c;$x++){
		echo $cars[$x] . "<br>";
	}
	sort ( $cars );
	echo "<br>and sort <br><hr>";
	for($x=0;$x<$c;$x++){
		echo $cars[$x] . "<br>";
	}
	?> 