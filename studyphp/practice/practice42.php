<h1>htmlspecialchars 사용</h1>
<form method="post"
	action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>&quot;&gt;&lt;script&gt;alert('hacked')&lt;/script&gt;">
	<input type="submit" value = "헤크코드 전송">
</form>