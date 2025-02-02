function mergeSort(arr) {
  
if(arr.length == 1) {
  return arr;
}


  let low = 0;
  let high = arr.length - 1;
  let mid = Math.floor((low + high) / 2);

  if (low < high) {
    let lowArray = arr.slice(low, mid + 1);
    let highArray = arr.slice(mid + 1, high + 1);

    lowArray = mergeSort(lowArray);
    highArray = mergeSort(highArray);
    let sizeOfLowArray = lowArray.length;
    let sizeOfHighArray = highArray.length;
    let newArray = [];

    let mergedArray = merge(lowArray, highArray,sizeOfLowArray,sizeOfHighArray,newArray);

    return mergedArray;
  }
}

function merge(lowArray, highArray,sizeOfLowArray,sizeOfHighArray,newArray) {
  let i = 0;
  let k = 0;
  let j = 0;
 

  while (i < sizeOfLowArray && j < sizeOfHighArray) {
    if (lowArray[i] < highArray[j]) {
      newArray[k] = lowArray[i];
      i++;
      k++;
    } else {
      newArray[k] = highArray[j];
      j++;
      k++;
    }

    
  }
  
  for (; i < sizeOfLowArray; i++) {
    newArray[k] = lowArray[i];
    k++;
  }
  for (; j < sizeOfHighArray; j++) {
    newArray[k] = highArray[j];
    k++;
  } 
  return newArray;
}

console.log(mergeSort([105, 79, 100, 110]));
