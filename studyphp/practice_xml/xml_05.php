<?php
$xml = simplexml_load_file ( "books.xml" ) or die ( "에러다. 해당 오브젝트를 불러오지 못했다." );
echo $xml->book[0] ->title . "<br>";
echo $xml->book[1] ->title;
?>