<html>
<body>

	<form method="post"
		action="<?php echo $_SERVER['PHP_SELF'];?>">
		Name: <input type="text" name="fname"> <input
			type="submit">
	</form>

<?php
$long = "first";
if ($_SERVER ["REQUEST_METHOD"] == "POST") {
	// collect value of input field
	$name = $_REQUEST ['fname'];
	if (empty ( $name )) {
		echo "Name is empty";
	} else {
		$long .= "<br> $name";
		echo $long;
		
	}
}
?>

</body>
</html>
