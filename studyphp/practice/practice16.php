 <?php
 date_default_timezone_set("Asia/Seoul");
$t = date("H");
print "$t<br>";
if ($t < "10") {
    echo "Have a good morning!";
} elseif ($t < "20") {
    echo "Have a good day!";
} else {
    echo "Have a good night!";
}
?> 