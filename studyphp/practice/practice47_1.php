<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="practice44.css">
<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width,initial-scale = 1.0" />
<script src="/studyphp/js/jquery-3.1.1.min.js"></script>
<script>
	$(document).ready(function(){
		$("#form_ig").submit();

		});


		</script>

<title>검수</title>
</head>
<body>

<?php

// define variables and set to empty values
$eto;
$ec =0;
$nameErr = $emailErr = $genderErr = $websiteErr = "";
$name = $email = $gender = $comment = $website = "";

if ($_SERVER ["REQUEST_METHOD"] == "POST") {
	if (empty ( $_POST ["name"] )) {
		$nameErr = "Name is required";
		$ec++;
	} else {
		$name = test_input ( $_POST ["name"] );
		// check if name only contains letters and whitespace
		if (! preg_match ( "/^[a-zA-Z ]*$/", $name )) {
			$nameErr = "Only letters and white space allowed";
			$ec++;
		}
	}
	
	if (empty ( $_POST ["email"] )) {
		$emailErr = "Email is required";
		$ec++;
	} else {
		$email = test_input ( $_POST ["email"] );
		// check if e-mail address is well-formed
		if (! filter_var ( $email, FILTER_VALIDATE_EMAIL )) {
			$emailErr = "Invalid email format";
			$ec++;
		}
	}
	
	if (empty ( $_POST ["website"] )) {
		$website = "";
	} else {
		$website = test_input ( $_POST ["website"] );
		// check if URL address syntax is valid (this regular expression also allows dashes in the URL)
		if (! preg_match ( "/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i", $website )) {
			$websiteErr = "Invalid URL";
			$ec++;
		}
	}
	
	if (empty ( $_POST ["comment"] )) {
		$comment = "";
	} else {
		$comment = test_input ( $_POST ["comment"] );
	}
	
	if (empty ( $_POST ["gender"] )) {
		$genderErr = "Gender is required";
		$ec++;
	} else {
		$gender = test_input ( $_POST ["gender"] );
	}
	if (everythings_ok ($ec)) {
		htmlspecialchars ( $eto = "practice47_2.php" );
	} else {
		htmlspecialchars ( $eto = "practice47.php" );
	}
	
}
function everythings_ok($ec) {
	//echo $ec."<br>";
	if ($ec == 0) { // 에러 변수가 비어있는지 확인하는 것. 모두 비어있다면 NULL을 리턴할 것이다.
		return true;
	}else{
		return false;
	}
}
function test_input($data) {
	$data = trim ( $data );
	$data = stripslashes ( $data );
	$data = htmlspecialchars ( $data );
	return $data;
}
?>

<form method="post"
		action="<?php echo htmlspecialchars($eto); ?>"
		id="form_ig">
		  <input name="name" type="hidden"
			value="<?php  echo $name;?>"> <input name="email"
			type="hidden" value="<?php  echo $email;?>"> <input
			name="website" type="hidden"
			value="<?php  echo $website;?>"> <input name="comment"
			type="hidden" value="<?php  echo $comment;?>"> <input
			name="gender" type="hidden"
			value="<?php  echo $gender;?>">
			
			 <input name="nameErr" type="hidden"
			value="<?php  echo $nameErr;?>"> 
			<input name="emailErr" type="hidden" value="<?php  echo $emailErr;?>"> 
			<input name="websiteErr" type="hidden"
			value="<?php  echo $websiteErr;?>"> 
			<input name="commentErr" type="hidden" value="<?php  echo $commentErr;?>"> 
			<input name="genderErr" type="hidden" value="<?php  echo $genderErr;?>">
	</form>
</body>
</html>