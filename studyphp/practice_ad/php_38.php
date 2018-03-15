<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width,initial-scale = 1.0" />
<title>연습_PHP</title>
</head>
<body>
	<table>
		<tr>
			<td>Filter Name</td>
			<td>Filter ID</td>
		</tr>
  <?php
		foreach ( filter_list () as $id => $filter ) {
			echo '<tr><td>' . $filter . '</td><td>' . filter_id ( $filter ) . '</td></tr>';
		}
		?>
</table>
</body>
</html>