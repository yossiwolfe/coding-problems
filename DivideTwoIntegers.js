/**

Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero.

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Example 2:

Input: dividend = 7, divisor = -3
Output: -2

Note:

Both dividend and divisor will be 32-bit signed integers.
The divisor will never be 0.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.

**/


/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    
    let sign = 1;
    if ((dividend < 0 || divisor < 0) && !(dividend < 0 && divisor < 0)) {
        sign = -1;
    }
    
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    
    const nMap = dividend.toString().split('');
    
    let carryOver = 0, quotientArray = [], answer;
    for (let i = 0; i < nMap.length; i++) {
        if (carryOver > 0) nMap[i] = (carryOver.toString() + nMap[i]);
        const {quotient, remainder} = actualDivide(nMap[i], divisor);
        quotientArray.push(quotient);            
        carryOver = remainder;
    }
    
    answer = quotientArray.join('');    
    if (sign < 0) answer = 0 - answer;
    answer = answer < -2147483648 ? -2147483648 : answer;
    answer = answer > 2147483647 ? 2147483647 : answer;    
    return answer;
};

function actualDivide (dividend, divisor) { 
    let currentDividend = dividend, rounds = 0;
    while (currentDividend >= divisor) {
        currentDividend = currentDividend - divisor;
        rounds++;
    }
    return {quotient: rounds, remainder: currentDividend};
}
