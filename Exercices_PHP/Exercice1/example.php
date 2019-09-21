<?php
echo "<body style='background-color:black; color:white'></body>";
$ma_variable = ".les poneys c'est le kiff"."\n";
//echo str_repeat("$ma_variable", 3000);
$i = 1;
if (php_sapi_name() == "cli") {
	while($i < 3001) {
		echo ($i.$ma_variable);
		$i++;
		}
	} 
		else {
			while($i < 3001) {
				echo ($i.$ma_variable."<br>");
				$i++;
				}
			}
$temps_execution = microtime(true) - $_SERVER["REQUEST_TIME_FLOAT"];
echo "le temps d'éxécution du script est de ".$temps_execution." secondes."."\n";
?>