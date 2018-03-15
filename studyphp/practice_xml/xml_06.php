<?php
$xml = simplexml_load_file ( "books.xml" ) or die ( "해당 개체를 열지 못했습니다." );

foreach ( $xml->children () as $books ) {
	echo $books->title . ", ";
	echo $books->author . ", ";
	echo $books->year . ", ";
	echo $books->price . "<br>";
}
?>