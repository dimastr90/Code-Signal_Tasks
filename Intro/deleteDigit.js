/*
Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example

For n = 152, the output should be
deleteDigit(n) = 52;
For n = 1001, the output should be
deleteDigit(n) = 101.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
10 ≤ n ≤ 106.

[output] integer
*/

function deleteDigit(n) {
  let max=0;
  n+="";
  for(let i=0; i<n.length; i++){
    let cur = "";
    for(let j=0; j<n.length; j++){
      if(j!==i){
        cur+=n[j];
      }
    }
     max=Math.max(max,Number(cur));
  }
  return max;
}
