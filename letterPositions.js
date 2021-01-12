const letterPositions = function (sentence) {
  let lettersPlaced = {};// final result {h: [0], e: [1], l: [2,3], o:[4] } 
  for (let i = 0; i < sentence.length; i++) {// iterate through sentence
    if (sentence[i] !== "") { // if we dont have a space then proceed to grab a letter
      if (lettersPlaced[sentence[i]]) {// is we have a letter that is indexed
        lettersPlaced[sentence[i]].push(i);// lets store it

      } else {// otherwise if we have one lets add a new index
        lettersPlaced[sentence[i]] = [i]
      }

    }

  }

  return lettersPlaced  //give me my letters

}


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
let actual = letterPositions("hello");
let expected = [{h: [0], e: [1], l: [2,], o:[4] } ];


assertArrayEqual(actual,expected);