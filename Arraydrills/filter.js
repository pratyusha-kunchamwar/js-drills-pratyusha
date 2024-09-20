
function filter(elements, callBack) {

  if (!Array.isArray(elements)) {//to check array or not
    return "Please Enter Array";

  }
  //initialize an Empty array array
  let newArray = [];
  for (let index = 0; index < elements.length; index++) {
    let result = callBack(elements[index], index, elements);
    if (result) {
      newArray.push(elements[index]);//if the returned value is true then only out put will get printed
    }
  }
  return newArray;
}

module.exports = filter ;