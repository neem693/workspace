<?php
$xml =simplexml_load_file("books.xml") or die("개체를 불러오지 못했다.");
echo $xml->book[0]['category'] . "<br>";
echo $xml->book[1]->title['lang'];
?>