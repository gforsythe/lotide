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
  

//test these

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
//this checks my function
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false);