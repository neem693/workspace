<?php
$age = array( "Joe"=>"43", "Peter"=>"35", "Ben"=>"37" );

echo "그냥 출력한다.<br><hr>";
foreach ($age as $x =>$x_value){
	echo "$x 는 $x_value 살이다.<br>";
}
asort($age);

echo "<br>asort()한다.<br><hr>";

foreach ($age as $x =>$x_value){
	echo "$x 는 $x_value 살이다.<br>";
}
echo "<br>ksort()한다.<br><hr>";

ksort($age);

foreach ($age as $x =>$x_value){
	echo "$x 는 $x_value 살이다.<br>";
}


?> 