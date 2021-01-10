const myFunction = x => x.stars === 2; // the function that I want to callback
const movies =                         // the object to find the key
{
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}


const findKey = function (obj, callback) {
  for (let key in obj) { //take in object and look at those keys
    //console.log(obj[key]) // I got the stars but in a object
    if (callback(obj[key])) { //if callback is true to stars: 2
      return key // return the result

       }
    }

  };
let actual = findKey(movies, myFunction);




  const assertEqual = function (actual, expected) {
    if (actual === expected) {
      console.log(`🔥🔥🔥  Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`😔😔😔 Assertion Failed:${actual} !== ${expected}`);
    }

  };


  console.log(assertEqual(actual, "noma"));