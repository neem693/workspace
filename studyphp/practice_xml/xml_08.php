<?php
$xml = simplexml_load_file('books.xml') or die("객체를 열수 없습니다.");
foreach($xml->children() as $books){
	echo $books->title['lang'];
	echo "<br>";
}
?>