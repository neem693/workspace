 <?php
	$st = strpos ( "Hello world!", "world" );
	echo "$st 번째에 있다.<br>"; // outputs 6
	echo "이제 if문을 써서 없는걸 해보겠다<br>";
	$nst = strpos ( "Hello world!", "world" );
	if ($nst)
		echo "아직도 있네";
	
	else
		echo "없다.";
	?> 