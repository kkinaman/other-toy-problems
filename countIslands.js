/*

Given a matrix like below,
[[- - - X -],
 [- X - - -],
 [- X X - -],
 [- - X - -],
 [- - - X X]]
 determine how many islands exist.

 An island is any contiguous block of Xs, by row or column (NOT diagonally).
 i.e. The above matrix has 3 islands.

 console.log(findIslands([['-', '-', '-', 'X', '-'],
  ['-', 'X', '-', '-', '-'],
  ['-', 'X', 'X', '-', '-'],
  ['-', '-', 'X', '-', '-'],
  ['-', '-', '-', 'X', 'X']]));

  should return 3

 */

 //function findIslands
 function findIslands(matrix) {
  //numIslands = 0
  var numIslands = 0;
  //number rows
  var r = matrix[0].length;
  //number cols
  var c = matrix.length;
  //for [i, j] in matrix
  for (var i = 0; i < c; i++) {
    for (var j = 0; j < r; j++) {
      //if X
      if (matrix[i][j] === 'X') {
        //findEnd([i, j])
        findEnd(i, j);
      }
    }
  }
  //function findEnd(tuple) {
  function findEnd(i, j) {
    //change tuple in matrix from X to -
    matrix[i][j] = '-';
    var hasNeighbor = false;
    //if has left neighbor
    if (j > 0) {
      if (matrix[i][j - 1] === 'X') {
        hasNeighbor = true;
        findEnd(i, j - 1);
      }
    }
    //if has right neighbor
    if (j < r - 1) {
      if (matrix[i][j + 1] === 'X') {
        hasNeighbor = true;
        findEnd(i, j + 1);
      }
    }
    //if has upper neighbor
    if (i > 0) {
      if (matrix[i - 1][j] === 'X') {
        hasNeighbor = true;
        findEnd(i - 1, j);
      } 
    } 
    //if has lower neighbor
    if (i < c - 1) {
      if (matrix[i + 1][j] === 'X') {
        hasNeighbor = true;
        findEnd(i + 1, j);
      } 
    } 

    if (!hasNeighbor) {
      numIslands++;
    }
  }
  //return numIslands
  return numIslands;
}