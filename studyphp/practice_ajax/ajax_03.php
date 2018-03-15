<?php

$q = $_GET["q"];

$xmlDoc = new DOMDocument();
$xmlDoc->load("CD_Catalog.xml");

$x=$xmlDoc->getElementsByTagName("ARTIST");
echo var_dump($x)."<br>";
for($i=0; $i<=$x->length-1;$i++){
	if($x->item($i)->nodeType==1){
		if($x->item($i)->childNodes->item(0)->nodeValue == $q){
			
			$y=($x->item($i)->parentNode);
			
			
		}
	}
}
echo var_dump($y)."<br>";
$cd = ($y->childNodes);
echo var_dump($cd)."<br>";
for($i=0;$i<$cd->length;$i++){
	if($cd->item($i)->nodeType==1){
	//echo var_dump($cd->item($i))."<br>";
	echo $i."<br>";
		echo("<b>".$cd->item($i)->childNodes->item(0)->nodeValue."</b>");
		echo("<br>");
	}
}
?>
