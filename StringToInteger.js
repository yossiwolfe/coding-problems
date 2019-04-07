/**

Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:

Only the space character ' ' is considered as whitespace character.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.

**/

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let number = str.trim();

    if ((number[0] == '+' || number[0] == '-') && !Number.isInteger(parseInt(number[1]))) return 0;
    
    let sign = 1;
    if (number[0] == '-') {
        sign = -1;
        number = number.replace('-', '');
    }
    else if (number[0] == '+') {
        number = number.replace('+', '');        
    }
    
    if (!Number.isInteger(parseInt(number[0]))) return 0;
    
    number = parseInt(number) * sign;
        
    if (number > 2147483647) number = 2147483647;
    if (number < -2147483648) number = -2147483648;
            
    return number;
};
