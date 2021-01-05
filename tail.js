const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔥🔥🔥  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😔😔😔 Assertion Failed:${actual} !== ${expected}`);
  }

};

function tail(array) {
  let newTail = [...array];
  
  return newTail.splice(1);

}

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length,3); 