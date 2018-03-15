
<?php
$x = array("a" => "red", "b" => "green");
$y = array("c" => "blue", "d" => "yellow");
$z = array("a" => "red", "b" => "green");


print "x는 다음과 같다.";
print_r($x);
print "<br>y는 다음과 같다.";
print_r($y);
print "<br>z는 다음과 같다.";
print_r($z);
print "<br>";

print "3개를 모두 더해 나열하면 <br>";
print_r($x + $y + $z);

print "<br>x와 y는 다른지";
var_dump($x <> $y);

print "<br> x와 y는 같은지 ";
var_dump($x == $y);

print "<br> x와 z은 같은지 ";
var_dump($x == $z);

print "<br> x와 z은 같은 타입인지 ";
var_dump($x === $z);


?>
