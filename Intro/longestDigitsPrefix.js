/*Given a string, output its longest prefix which contains only digits.

Example

For inputString = "123aa1", the output should be
longestDigitsPrefix(inputString) = "123".

Input/Output

[execution time limit] 4 seconds (js)

[input] string inputString

Guaranteed constraints:
3 ≤ inputString.length ≤ 100.

[output] string
*/

function longestDigitsPrefix(inputString) {
    let res="";
    for(let i=0, end=inputString.length;i<end; i++){
        if(inputString[i]==="0"){
            res+="0";
        }else{
            break;
        }
    }
    return inputString[0]===" " || isNaN(parseInt(inputString)) ? "" : res+parseInt(inputString,10).toString();
}
