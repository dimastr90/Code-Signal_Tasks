/*
Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.



Example

For cell = "a1", the output should be
chessKnight(cell) = 2.



For cell = "c2", the output should be
chessKnight(cell) = 6.



Input/Output

[execution time limit] 4 seconds (js)

[input] string cell

String consisting of 2 letters - coordinates of the knight on an 8 × 8 chessboard in chess notation.

Guaranteed constraints:
cell.length = 2,
'a' ≤ cell[0] ≤ 'h',
1 ≤ cell[1] ≤ 8.

[output] integer
*/

function chessKnight(cell) {
    let mov = 0; 
    if(cell[0]==='a' || cell[0]==='h'){
        mov+=2;
     }else  if(cell[0]==='b' || cell[0]==='g'){
         mov+=3;
     }else{
         mov+=4;
     }
    
    if(cell[1]==="2" || cell[1]==="7"){
        mov=mov===2 ? 3 : mov===3 ? 4 : 6;
    }else if(Number(cell[1])>2  && Number(cell[1])<7){
          mov=mov===2 ? 4 : mov===3 ? 6 : 8;
    }
    return mov;
}
