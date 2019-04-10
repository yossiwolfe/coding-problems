#!/bin/python3

import math
import os
import random
import re
import sys

# FROM https://www.hackerrank.com/challenges/sock-merchant/problem

# Complete the sockMerchant function below.
def sockMerchant(n, ar):
    colors = {}
    matches = 0
    for color in ar:
        colorIdx = 'c' + str(color);
        currentColorVal = colors.get(colorIdx, 0)
        currentColorVal += 1
        if currentColorVal == 2:
            currentColorVal = 0;
            matches += 1
        colors[colorIdx] = currentColorVal
    return matches

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    ar = list(map(int, input().rstrip().split()))

    result = sockMerchant(n, ar)

    fptr.write(str(result) + '\n')

    fptr.close()
