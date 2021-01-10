let data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
let theFunction = x => x < 0;

let takeUntil = function (array, callback) {
  let result = []
  for ( let item of array){//take in the array
    if(callback(item)){//implement the callback
      return result;//if true return the result
    }else{
     result.push(item); //the callback makes the array stop it
      
    }
  }
  return result;
}


console.log(takeUntil(data1, theFunction));

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
    console.log(`😈😈😈 Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`🤮🤮🤮 Assertion Failed:${actual} !== ${expected}.`)

  }
}
let result1 = takeUntil(data1, x => x < 0);
assertArrayEqual(result1 , [1, 2, 5, 7, 2]);