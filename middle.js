

const middle = function(array) {//take array
  let newArray = [];
  // go through the array
  // for odd number arrays single middle element is brought back
  if (array.length <= 2) {                    //for arrays with 1 or 2 elements  return an "[]"
    //for even number element bring back 2 middle elements
    return newArray;

  } if (array.length % 2 === 1) {
    let oddNumberIndex = Math.floor(array.length / 2);
    let oddValue = array[oddNumberIndex];
    newArray.push(oddValue);

  } else {
    let evenNumberIndex = array.length / 2;
    let evenNumberIndexTwo = evenNumberIndex - 1;
    let evenValueOne = array[evenNumberIndex];
    let evenValueTwo = array[evenNumberIndexTwo];
    newArray.push(evenValueTwo, evenValueOne);

  }
  return newArray;
}

module.exports = middle;














