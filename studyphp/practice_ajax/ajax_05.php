<?php
function myerror($errno, $errstr, $ef, $el,$es){
	if($errno==8)
		return;
	echo "에러발생:[$errno]$errstr <br>";
	echo "위치: $ef <br>";
	echo "라인: $el <br>";
	echo "상황: $es";
	
}
set_error_handler("myerror");

$opts = array (
		'http' => array (
				'user_agent' => 'PHP libxml agent' 
		) 
);
$context = stream_context_create ( $opts );
libxml_set_streams_context ( $context );

$q = $_GET ["q"];

if ($q == "Google") {
	$xml = ("https://news.google.com/news/feeds?cf=all&ned=kr&hl=ko&output=rss");
} elseif ($q == "hani") {
	$xml = ("http://www.hani.co.kr/rss/");
} elseif ($q == "ddanzi") {
	$xml = ('http://www.ddanzi.com/rss');
} elseif ($q == "sisain") {
	$xml = ("http://ph.sisain.co.kr/rss/01.xml");
} elseif ($q == "pressian") {
	$xml = ("http://www.pressian.com/data/rss/news.xml");
}

$xmlDoc = new DOMDocument ();
$xmlDoc->load ( $xml );
// echo var_dump($xmlDoc);
$channel = $xmlDoc->getElementsByTagName ( 'channel' )->item ( 0 );
// echo var_dump($channel);
$channel_title = $channel->getElementsByTagName ( 'title' )->item ( 0 )->childNodes->item ( 0 )->nodeValue;

$channel_link = $channel->getElementsByTagName ( 'link' )->item ( 0 )->childNodes->item ( 0 )->nodeValue;
$channel_desc = $channel->getElementsByTagName ( 'description' )->item ( 0 )->childNodes->item ( 0 )->nodeValue;
// $channel_text=$channel->getElementsByTagName('textContent')->item(0)->childNodes->item(0)->nodeValue;

echo ("<p><a href ='" . $channel_link . "'>" . $channel_title . "</a>");
echo ("<br>");
if ( isset ( $channel_desc ))
	echo ($channel_desc);
echo ("<br>");
// echo($channel_text."</p>");
$x = $xmlDoc->getElementsByTagName ( 'item' );
for($i = 0; $i <= 2; $i ++) {
	
	$item_title = $x->item ( $i )->getElementsByTagName ( 'title' )->item ( 0 )->childNodes->item ( 0 )->nodeValue;
	
	$item_link = $x->item ( $i )->getElementsByTagName ( 'link' )->item ( 0 )->childNodes->item ( 0 )->nodeValue;
	
	$item_desc = $x->item ( $i )->getElementsByTagName ( 'description' )->item ( 0 )->/*childNodes->item(0)->*/nodeValue;
	echo ("<p><a href='" . $item_link . "'>" . $item_title . "</a>");
	echo ("<br>");
	echo ($item_desc . "</p>");
	usleep(500000);
}
?>
	
	








