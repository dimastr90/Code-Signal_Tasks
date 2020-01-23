/*
Determine whether the given number n is a power of two.

Example

For n = 64, the output should be
isPowerOfTwo2(n) = true;

For n = 5, the output should be
isPowerOfTwo2(n) = false.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer64 n

A positive integer.

Guaranteed constraints:
1 ≤ n ≤ 1012.

[output] boolean

true if n can be represented in the form 2b (2 to the power of b) where b is a non-negative integer; false otherwise.

*/

function isPowerOfTwo2(n) {
    let k=1;
    let res=0;
    if(n===1) return true;
    do{
       res=Math.pow(2,k++);
       if(res===n) return true;
   }while(res<n)
       
    return false;
}
