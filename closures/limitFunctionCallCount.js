function limitFunction(cb, n) {
  return function () {
    if (n > 0) {
      n--;
      return cb();
    }
    else {
      return null;
    }
  };
}
let limitHi = function () {
  return "Hello closure";
};
let result = limitFunction(limitHi, 2);

//limit is 2
console.log("first",result());
console.log("second",result());
console.log("Limit when complete",result());
