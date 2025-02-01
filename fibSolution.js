function fibs(noOfElements) {
  if (noOfElements < 0 || typeof noOfElements !== "number") {
    return "Please enter a valid positive number";
  }

  let myFibSeq = [];
  for (let i = 0; i < noOfElements; i++) {
    if (myFibSeq.length < 2) {
      myFibSeq.push(i);
    } else {
      myFibSeq.push(
        myFibSeq[myFibSeq.length - 1] + myFibSeq[myFibSeq.length - 2]
      );
    }
  }
  return myFibSeq;
}

console.log(fibs(-1)); // Expected output: "Please enter a valid positive number"
console.log(fibs(0)); // Expected output: []
console.log(fibs(1)); // Expected output: [0]
console.log(fibs(5)); // Expected output: [0,1,1,2,3]
console.log(fibs(10)); // Expected output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

