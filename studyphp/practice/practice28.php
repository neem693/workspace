<?php
$cars = array("Volvo", "BMW", "Toyota");
$c = count($cars);
for($x=0;$x<$c;$x++){
	echo $cars[$x] . "<br>";
}
rsort ( $cars );
echo "<br>and rsort <br><hr>";
for($x=0;$x<$c;$x++){
	echo $cars[$x] . "<br>";
}
?> 