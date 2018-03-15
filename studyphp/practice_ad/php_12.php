<?php
date_default_timezone_set("Asia/seoul");
$t=time();

echo($t . "<br>");
echo(date("Y-m-d",$t))."<br>";


$g = strtotime("saturday");
echo $g-time() . "<br>";
echo ceil(($g-time())/60/60/24);

?> 