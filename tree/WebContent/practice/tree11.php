

<?php
if($_SERVER['REQUEST_METHOD']=="POST"&&strlen($_REQUEST['search_text'])){
	$st = $_REQUEST['search_text'];
	echo '<h1>검색</h1><p>'. $st.' 으로 검색 </p>';
}
else{
	echo "검색어를 입력해주세요.";
}