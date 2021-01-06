
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
    //console.log(eqArrays);
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`Assertion Failed:${actual} !== ${expected}.`)

  }
}


assertArrayEqual([1, 2, 3], [1, 2, 3,]);
assertArrayEqual([1, 2, 3], [1, 2, 3, 4, 5, 7]);
assertArrayEqual([1, 2, 3], [1, "2", 3,]);
assertArrayEqual([1], [1]);