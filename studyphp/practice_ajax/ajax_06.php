<?php
$vote = $_REQUEST ["vote"];
// get content of textfile

$filename = "poll_result.txt";
$content = file ( $filename );

// put content in array

$array = explode ( "||", $content [0] );
$fe = $array [0];
$to = $array [1];
$red = $array [2];
$force = $array [3];
$mer = $array [4];

if ($vote == 0) {
	$fe = $fe + 1;
}
if ($vote == 1) {
	$to = $to + 1;
}
if ($vote == 2) {
	$red = $red + 1;
}
if ($vote == 3) {
	$force = $force + 1;
}

if ($vote == 4) {
	$mer = $mer + 1;
}

$all = $fe + $to + $red + $force + $mer;

// insert votes to txt file
$insertvote = $fe . "||" . $to. "||" .$red. "||" .$force. "||" .$mer;
$fp = fopen ( $filename, "w" );
fputs ( $fp, $insertvote );
fclose ( $fp );
?>

<h2>Result:</h2>
<table>
	<tr>
		<td>페라리:</td>
		<td><img src="/studyphp/image/poll.png"
			width="<?php echo  100*round($fe/$all,2); ?>" height="20"><?php echo  100*round($fe/$all,2); ?>%</td>
	</tr>
	<tr>
		<td>토로 루소:</td>
		<td><img src="/studyphp/image/poll.png"
			width="<?php echo  100*round($to/$all,2); ?>" height="20"><?php echo  100*round($to/$all,2); ?>%</td>
	</tr>
	<tr>
		<td>레드불:</td>
		<td><img src="/studyphp/image/poll.png"
			width="<?php echo  100*round($red/$all,2); ?>" height="20"><?php echo  100*round($red/$all,2); ?>%</td>
	</tr>
	<tr>
		<td>포스인디아:</td>
		<td><img src="/studyphp/image/poll.png"
			width="<?php echo  100*round($force/$all,2); ?>" height="20"><?php echo  100*round($force/$all,2); ?>%</td>
	</tr>
	<tr>
		<td>머시다스:</td>
		<td><img src="/studyphp/image/poll.png"
			width="<?php echo  100*round($mer/$all,2); ?>" height="20"><?php echo  100*round($mer/$all,2); ?>%</td>
	</tr>
</table>

<video loop="loop" autoplay="autoplay">
<source src="/studyphp/video/choose_ball.mp4">
</video>

