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

let resultOne = countLetters("LHL");
console.log(resultOne);
assertEqual(resultOne["L"], 2);
assertEqual(resultOne["H"], 1);// {  l: 2, h: 1}