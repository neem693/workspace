<?php
echo "세계 표준시 (UTC):" . "<br />\n";
date_default_timezone_set("GMT+0");
echo date("Y-m-d H:i:s") . "<br /><br />\n\n"; // (24시간제)


echo "한국 표준시 (KST):" . "<br />\n";
date_default_timezone_set("Asia/Seoul");
echo date("Y-m-d H:i:s") . "<br /><br />\n\n"; // (24시간제)


echo "미국 태평양 표준시 (PST/PDT):" . "<br />\n";
date_default_timezone_set("America/Los_Angeles");
echo date("Y-m-d H:i:s") . "<br /><br />\n\n"; // (24시간제)


echo "미국 동부 표준시 (EST/EDT):" . "<br />\n";
date_default_timezone_set("America/New_York");
echo date("Y-m-d H:i:s") . "<br /><br />\n\n"; // (24시간제)


echo "중앙 유럽/프랑스 파리 표준시 (CET/CEST):" . "<br />\n";
date_default_timezone_set("Europe/Paris");
echo date("Y-m-d H:i:s") . "<br /><br />\n\n"; // (24시간제)


echo "중국 표준시 (UTC/GMT +8):" . "<br />\n";
date_default_timezone_set("Asia/Shanghai");
echo date("Y-m-d H:i:s") . "<br /><br />\n\n"; // (24시간제)


// 한국 시간으로 초기화시키기
date_default_timezone_set("Asia/Seoul");

?>