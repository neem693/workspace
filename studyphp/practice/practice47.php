<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="practice44.css">
<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width,initial-scale = 1.0" />
	
<title>연습_php</title>
</head>
<body>



<?php
// define variables and set to empty values

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
function test_input($data) {
	$data = trim ( $data );
	$data = stripslashes ( $data );
	$data = htmlspecialchars ( $data );
	return $data;
}
?>

<h2>PHP Form Validation Example</h2>
	<p>
		<span class="error">* required field.</span>
	</p>
	<form method="post"
		action="<?php echo htmlspecialchars("practice47_1.php");?>">
		Name: <input type="text" name="name"
			value="<?php echo $name;?>"> <span class="error">* <?php echo $nameErr;?></span>
		<br>
		<br> E-mail: <input type="text" name="email"
			value="<?php echo $email;?>"> <span class="error">* <?php echo $emailErr;?></span>
		<br>
		<br> Website: <input type="text" name="website"
			value="<?php echo $website ?>"> <span class="error"><?php echo $websiteErr;?></span>
		<br>
		<br> Comment:
		<textarea name="comment" rows="5" cols="40"></textarea>
		<br>
		<br> Gender: <input type="radio" name="gender"
			value="female"
			<?php
			
if (isset ( $gender ) && $gender == "female") {
				echo "checked";
			}
			?>>Female <input type="radio" name="gender" value="male"
			<?php
			
if (isset ( $gender ) && $gender == "male") {
				echo "checked";
			}
			?>>Male <span class="error">* <?php echo $genderErr;?></span>
		<br>
		<br> <input type="submit" name="submit" value="Submit">
	</form>

<?php
echo "<h2>Your Input:</h2>";
echo $name;
echo "<br>";
echo $email;
echo "<br>";
echo $website;
echo "<br>";
echo $comment;
echo "<br>";
echo $gender;
echo "<br>";


?>



</body>
</html>