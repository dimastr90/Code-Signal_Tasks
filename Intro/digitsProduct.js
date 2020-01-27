/*
Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

Example

For product = 12, the output should be
digitsProduct(product) = 26;
For product = 19, the output should be
digitsProduct(product) = -1.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer product

Guaranteed constraints:
0 ≤ product ≤ 600.

[output] integer
*/

function digitsProduct(product) {
  if(product===1) return product;
  if(product===0) return 10;
  let res="";
   for(let i=9; i>=2; i--){
     while(product%i===0){
       res=i+res;
       product/=i;
     }
   }
  return product>1 ? -1 : Number(res);
}
