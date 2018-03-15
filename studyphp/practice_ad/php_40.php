 <?php
	$int = 100;
	$int1 = 0;
	if (! filter_var ( $int, FILTER_VALIDATE_INT ) === false) {
		echo ("Integer is valid");
	} else {
		echo ("Integer is not valid");
	}
	echo "<br>변수가 이제 0이다.<br>";
	if (! filter_var ( $int1, FILTER_VALIDATE_INT ) === false) {
		echo ("Integer is valid");
	} else {
		echo ("Integer is not valid");
	}
	?> 