/*
Given a singly linked list l and an integer n, find the nth element from the end in l. If there are fewer than n elements in l, return -1.

Example

For l = [1, 2, 3, 4] and n = 3, the output should be
nthElementFromTheEnd(l, n) = 2;
For l = [10, 4, 2, 5, 8, 3, 2, 4] and n = 9, the output should be
nthElementFromTheEnd(l, n) = -1.
Input/Output

[execution time limit] 4 seconds (js)

[input] linkedlist.integer l

A singly linked list of integers.

Guaranteed constraints:
1 ≤ list size ≤ 105,
-109 ≤ element value ≤ 109.

[input] integer n

The index of the element you need to find in l (1-based).

Guaranteed constraints:
1 ≤ n ≤ 105.

[output] integer

The nth element from the end in l, or -1 if there are no such element.

*/

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function nthElementFromTheEnd(l, n) { 
    let arr=[l.value];
    while(l.next!==null){
     arr.push(l.next.value); 
     l=l.next;
    }
    
    return arr.length>=n ? arr[arr.length-n] : -1;
}
