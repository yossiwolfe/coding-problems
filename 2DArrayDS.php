<?php

// Complete the hourglassSum function below.
function hourglassSum($arr) {

    $max = false;
    for ($i = 0; $i < min(5, sizeof($arr) - 2); $i++) {
        for ($j = 0; $j < min(5, sizeof($arr[$i]) - 2); $j++) {
            $sum = $arr[$i][$j] + $arr[$i][$j + 1] + $arr[$i][$j + 2];
            $sum += $arr[$i + 1][$j + 1];
            $sum += $arr[$i + 2][$j] + $arr[$i + 2][$j + 1] + $arr[$i + 2][$j + 2];
            if ($max === false || $sum > $max) $max = $sum;
        }
    }
    return $max;
}

$fptr = fopen(getenv("OUTPUT_PATH"), "w");

$stdin = fopen("php://stdin", "r");

$arr = array();

for ($i = 0; $i < 6; $i++) {
    fscanf($stdin, "%[^\n]", $arr_temp);
    $arr[] = array_map('intval', preg_split('/ /', $arr_temp, -1, PREG_SPLIT_NO_EMPTY));
}

$result = hourglassSum($arr);

fwrite($fptr, $result . "\n");

fclose($stdin);
fclose($fptr);
