const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🔥🔥🔥  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😔😔😔 Assertion Failed:${actual} !== ${expected}`);
  }

};
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


const eqObjects = function (object1, object2) { //takes in obj1 and obj2 if true yahoo if false sad.
  const objOneKeys = Object.keys(object1)
  const objTwoKeys = Object.keys(object2)

  if (objOneKeys.length !== objTwoKeys.length) {
    return false;
  }
  for (let key of objOneKeys) {  // keyorder: c, d console.log(object1[key]) :1, ["2",3]
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key])
    } else if (object1[key] === object2[key]) { //we are checking if the value of the key is the same DOES NOT WORK FOR ARRAYS
      continue;
    } else {
      return false
    }
  }
  return true;
}






const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc));


const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2));