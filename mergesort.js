function split(arr) {
  const halfway = Math.floor(arr.length / 2);
  return [arr.slice(0, halfway), arr.slice(halfway)];
}

function merge(arrOne, arrTwo) {  
  let mergedArr = [];
  while (arrOne.length > 0 && arrTwo.length > 0) {
    if (arrOne[0] < arrTwo[0]) {
      mergedArr.push(arrOne.shift());
    } else {
      mergedArr.push(arrTwo.shift());
    }
  }
  mergedArr.push(...arrOne, ...arrTwo);
  return mergedArr;
}

function mergeSort(arr) {  
  if (arr.length < 2) {
    return arr;
  }
  let [firstHalf, secondHalf] = split(arr);
  if (arr.length === 2) {
    return merge(firstHalf, secondHalf);
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}
