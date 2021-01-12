const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🔥🔥🔥  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😔😔😔 Assertion Failed:${actual} !== ${expected}`);
  }

};


function countLetters(letters) {
  letterCount = {}//
  for (const letter of letters) {
    // console.log(letter)
    if (letterCount[letter]){
      letterCount[letter] += 1;
    
    } else{
      letterCount[letter] = 1

    }
    
  }
  return letterCount;
  // Like countonly, this function will bring back an object. 
  // The object will contain key and value. letter and # of letters.
};

let resultOne = countLetters("lighthouse in the house");
console.log(resultOne);
assertEqual(resultOne["l"], 2);
assertEqual(resultOne["h"], 1);// {  l: 2, h: 1}
assertEqual(resultOne["i"], 2);