<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type:application/json');
$scanned = scandir("./sub");
$len = count($scanned);
$i = 0;
$json = '[';
foreach ($scanned as $file_name) {
    if ($file_name != "." && $file_name != "..") {
    $json .= '"' . $file_name .'"';
    if ($i != $len - 1) {
        $json .= ',';
    }
}
    $i++;
}
$json .= "]";

echo $json;
?>