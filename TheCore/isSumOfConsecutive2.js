/*
Find the number of ways to express n as sum of some (at least two) consecutive positive integers.

Example

For n = 9, the output should be
isSumOfConsecutive2(n) = 2.

There are two ways to represent n = 9: 2 + 3 + 4 = 9 and 4 + 5 = 9.

For n = 8, the output should be
isSumOfConsecutive2(n) = 0.

There are no ways to represent n = 8.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive integer.

Guaranteed constraints:
1 ≤ n ≤ 104.

[output] integer
*/

function isSumOfConsecutive2(n) {
 let ways = 0;
    
    for(let i=1; i<n; i++){
        let buf=i;
        for(let j=i+1; j<n; j++){
            buf+=j;
            if(buf>n)break;
            if(buf === n) ways++;
        }
    }
    return ways;
}
