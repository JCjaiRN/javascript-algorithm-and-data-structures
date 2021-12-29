function multiplyAll(arr) {
  let product = 1 ,i,j =0;
  // Only change code below this line
    for(i=0;i<arr.length;i++){
      for(j=0; j<arr[i].length;j++){
        product *= arr[i][j];
      }
    }
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);