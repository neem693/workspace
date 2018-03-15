
<?php
$fp = fopen("poll_result.txt", w);
$renew = "0||0||0||0||0";
fputs($fp, $renew);
fclose($fp);
?>
