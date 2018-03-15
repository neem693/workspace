<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name = "viewport" content = "width=device-width,initial-scale = 1.0"/>
<title>연습_PHP</title>
</head>
<body>
<?php
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";
if ($_SERVER ["REQUEST_METHOD"] == "POST") {
	$name = $_POST["name"];
	$email = $_POST["email"];
	$gender = $_POST["gender"];
	$comment = $_POST["comment"];
	$website = $_POST["website"];
	$nameErr =  $_POST["nameErr"];
	$emailErr = $_POST["emailErr"];
	$genderErr = $_POST["genderErr"];
	$websiteErr = $_POST["websiteErr"];
	
}

echo $name."<br>";
echo $email."<br>";
echo $gender."<br>";
echo $comment."<br>";
echo $website."<br>";
?>


</body>
</html>