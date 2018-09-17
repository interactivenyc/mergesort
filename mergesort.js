//split function; splits into two
// if length is > 1

function split(arr) {
  console.log('split', arr);
  const halfway = Math.floor(arr.length / 2);
  let tempArr = [arr.slice(0, halfway), arr.slice(halfway)];
  let returnArr = tempArr.map(elem => {
    if (elem.length > 1) {
      return split(elem);
    } else {
      return elem;
    }
  })
  // console.log('returnArr', returnArr);

  return returnArr;
}

function merge(arrOne, arrTwo) {
  let mergedArr = [];
  while (arrOne.length > 0 && arrTwo.length > 0) {
    // if (Array.isArray(arrOne[0])) arrOne[0] = merge(...arrOne);
    // if (Array.isArray(arrOne[0])) arrOne[0] = merge(...arrOne);
    if (arrOne[0] < arrTwo[0]) {
      mergedArr.push(arrOne.shift());
    } else {
      mergedArr.push(arrTwo.shift());
    }
  }
  mergedArr.push(...arrOne, ...arrTwo);

  console.log(mergedArr);
  return mergedArr;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else if (arr.length === 2) {
    return merge(...split(arr));
  } else {
  }
}
