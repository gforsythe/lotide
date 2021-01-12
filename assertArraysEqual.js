const eqArrays = require("./eqArrays")


function assertArraysEqual(actual, expected) {
    //console.log(eqArrays);
  if (eqArrays(actual, expected)) {
    console.log(`😈😈😈 Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`🤮🤮🤮 Assertion Failed:${actual} !== ${expected}.`)

  }
}




module.exports = assertArraysEqual;