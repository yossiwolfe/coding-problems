#!/bin/python3

import math
import os
import random
import re
import sys

# FROM https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

# Complete the jumpingOnClouds function below.
def jumpingOnClouds(c):
    jumpCount = 0
    i = 0
    while i < len(c):
        if i + 2 <= len(c) - 1 and c[i + 2] == 0:
            i += 2
            jumpCount += 1
        elif i + 1 <= len(c) - 1 and c[i + 1] == 0:
            i += 1
            jumpCount += 1
        else:
            i += 1

    return jumpCount

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    c = list(map(int, input().rstrip().split()))

    result = jumpingOnClouds(c)

    fptr.write(str(result) + '\n')

    fptr.close()
