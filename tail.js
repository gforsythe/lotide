
function tail(array) {
  let newTail = [...array];
  return newTail.splice(1);
};


module.exports = tail;