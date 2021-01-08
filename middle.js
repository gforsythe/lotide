function eqArrays(arrayOne, arrayTwo) {

  if (arrayOne.length !== arrayTwo.length) {//I am comparing array one and array two. 
    return false;   //I want them to strictly === and that will return false if they aren't the same 
  }
  for (let i = 0; i < arrayOne.length; i++) {//go through one item at a time for arrayOne

    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }

  }
  //and if they don’t then return true
  return true;
}


function assertArrayEqual(actual, expected) {

  if (eqArrays(actual, expected)) {
    console.log(`😈😈😈 Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`🤮🤮🤮 Assertion Failed:${actual} !== ${expected}.`)

  }
}


const middle = function (array) {//take array
  let newArray = []
  // go through the array
  // for odd number arrays single middle element is brought back
  if (array.length <= 2) {                    //for arrays with 1 or 2 elements  return an "[]"
    //for even number element bring back 2 middle elements
    return newArray;

  } if (array.length % 2 === 1) {
    let oddNumberIndex = Math.floor(array.length / 2)
    let oddValue = array[oddNumberIndex]
    newArray.push(oddValue);

  } else{
    let evenNumberIndex = array.length / 2 ;
    let evenNumberIndexTwo = evenNumberIndex - 1;
    let evenValueOne = array[evenNumberIndex];
    let evenValueTwo = array[evenNumberIndexTwo]; 
    newArray.push(evenValueTwo, evenValueOne);

  }
  return newArray
}



const actual = middle([1, 2, 3, 4, 5]);
const expected = [3];
console.log(middle([1,]));
console.log(middle([1, 2, 3 ,4]));
assertArrayEqual(actual,expected);












