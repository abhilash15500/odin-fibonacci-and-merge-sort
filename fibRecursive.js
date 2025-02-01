function fibs(noOfElements, arr = [0, 1]) {
  
  if(noOfElements < 0) {
    throw new Error("Pls enter a valid positive number")
  }
  if(noOfElements===0) {
    return [];
  }
  if(noOfElements === 1) {
    return [0];
  }
  if (noOfElements === 2) {
    return arr;
  }
  if (arr.length >= 2) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return fibs(noOfElements-1,arr);
}



console.log(fibs(0)); // Expected output: []
console.log(fibs(1)); // Expected output: [0]
console.log(fibs(5)); // Expected output: [0,1,1,2,3]
console.log(fibs(10)); // Expected output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



