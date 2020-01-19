/* 
Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

Example

For st = "abcdc", the output should be
buildPalindrome(st) = "abcdcba".

Input/Output

[execution time limit] 4 seconds (js)

[input] string st

A string consisting of lowercase English letters.

Guaranteed constraints:
3 ≤ st.length ≤ 10.

[output] string
*/

function buildPalindrome(st) {
 let arr=st.split("");
    let i=0;
    
    while(arr.join("")!==arr.reverse().join("")){
        arr.reverse();
        arr=arr.slice(0,arr.length-i).concat(arr.slice(0,i+1).reverse());
        i++;
    }
    return arr.join("");
}
