const words = ["ground", "control", "to", "major", "tom"];




let map = function (array, callback) { //take in the array and callback
  const results = []//store result here

  for (const item of array) {//iterate through the array
    results.push(callback(item));//push results = each item is put in the array 
                                // it is indexed because of the callback function which takes each item
  }
  return results // bring back the results
}

const results1 = map(words, word => word[0]); //takes our variable action and provides the anonymous callback action





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

let myFunction = word => word[0]


console.log(assertArrayEqual(map(words, myFunction),["g", "c", "t", "m", "t"]));