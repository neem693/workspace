
<?php

$a [] = "하울진";
$a [] = "브리타니";
$a [] = "오타트리";
$a [] = "Anna";
$a [] = "Brittany";
$a [] = "Diana";
$a [] = "Fiona";
$a [] = "Hege";
$a [] = "Inga";
$a [] = "Johanna";
$a [] = "Kitty";
$a [] = "Linda";
$a [] = "Nina";
$a [] = "Ophelia";
$a [] = "하시진";
$a [] = "Evita";
$a [] = "Sunniva";
$a [] = "Tove";
$a [] = "Unni";
$a [] = "Violet";
$a [] = "Liza";
$a [] = "Elizabeth";
$a [] = "Ellen";
$a [] = "Wenche";
$a [] = "Vicky";

$q = urldecode($_REQUEST ["q"]);

$hint = "";

if ($q !== "") {
	$q = strtolower ( $q );
	$len = strlen ( $q );
	foreach ( $a as $name ) {
		if (stristr ( $q, substr ( $name, 0, $len ) )) {
			if ($hint === "") {
				$hint = $name;
			} else {
				$hint .= ", $name";
			}
		}
	}
}


echo $hint === "" ? "no suggestion" : urlencode($hint);

?>

