let matrix = [[1, 2], [3, 4]];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
//c1
function traverseMatrix(matrix) {
  matrix.forEach(element => {
    if (Array.isArray(element)) {
      traverseMatrix(element);
    } else {
      console.log(element);
    }
  });
}

traverseMatrix(matrix);

//c2
matrix.flatMap(row => row).forEach(console.log);