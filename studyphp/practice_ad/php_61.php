


<?php

$l=0;//line
ob_start();

?>
&lt;?php

$id = 29384;
$x = 23;
$y = 36;
$str = "하하하하하씨부랄 하하하하하하";

?&gt;

&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport"
	content="width=device-width,initial-scale = 1.0" /&gt;
&lt;link rel="stylesheet" href="/studyphp/style.css"&gt;
&lt;script src="/studyphp/js/jquery-3.2.1.min.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript"&gt;
	var id = &lt;?php echo $id; ?&gt;;
	var x = &lt;?php echo $x; ?&gt;;
	var y = &lt;?php echo $y; ?&gt;;
	var str = "&lt;?php echo $str; ?&gt;";
	$(document).ready(function() {

		$("#id").text(id);
		$("#x").text(x);
		$("#y").text(y);
		$("#str").text(str);
	})
&lt;/script&gt;
&lt;title&gt;연습_PHP&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;div id="check"&gt;&lt;/div&gt;
	&lt;div id="id"&gt;&lt;/div&gt;
	&lt;div id="x"&gt;&lt;/div&gt;
	&lt;div id="y"&gt;&lt;/div&gt;
	&lt;div id="str"&gt;&lt;/div&gt;



&lt;/body&gt;
&lt;/html&gt;
<?php

$string = ob_get_contents();
ob_end_clean();
echo "<br>";
//echo var_dump($string);
$string = explode(PHP_EOL, $string);
//echo "<br>";
//echo var_dump($string);
echo "<table>";
foreach ($string as $v){
	$l++;
	echo "<tr><td>$l&nbsp;&nbsp;</td><td>$v</td></tr>";
}
echo "</table>";

?>
