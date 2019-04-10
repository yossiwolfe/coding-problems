#!/bin/python3

import math
import os
import random
import re
import sys

# FROM https://www.hackerrank.com/challenges/counting-valleys/problem

# Complete the countingValleys function below.
def countingValleys(n, s):
    valleys = 0
    lastLevel = 0
    level = 0
    for step in s:
        lastLevel = level
        level += 1 if step == 'U' else -1
        if level < 0 and lastLevel >= 0:
            valleys += 1
    return valleys
    
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    s = input()

    result = countingValleys(n, s)

    fptr.write(str(result) + '\n')

    fptr.close()
