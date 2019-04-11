<?php

// FROM https://www.hackerrank.com/challenges/repeated-string/problem

// Complete the repeatedString function below.
function repeatedString($s, $n) {
    $repeatCount = floor($n/strlen($s));
    $carryoverStr = substr($s, 0, $n%strlen($s));
    $aCount = 0;
    $aCarryoverCount = 0;
    for ($i = 0; $i < strlen($s); $i++) {
        if ($s[$i] === 'a') {
            $aCount++;
        }
        if ($i < strlen($carryoverStr) && $carryoverStr[$i] === 'a') {
            $aCarryoverCount++;
        }
    }
    return ($aCount * $repeatCount) + $aCarryoverCount;
}

$fptr = fopen(getenv("OUTPUT_PATH"), "w");

$stdin = fopen("php://stdin", "r");

$s = '';
fscanf($stdin, "%[^\n]", $s);

fscanf($stdin, "%ld\n", $n);

$result = repeatedString($s, $n);

fwrite($fptr, $result . "\n");

fclose($stdin);
fclose($fptr);
