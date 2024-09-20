function cacheFunction(cb) {
  const closureObject = {};
  return function (...args) {
    if (args.length === 0) {
      return "No arguments passed";
    }

    const key = args.join("|"); //creating uniq key
    if (closureObject[key]) {
      return closureObject[key];
    } else {
      let result = cb(...args);
      console.log("Generated", result);
      closureObject[key] = result;
      return result;
    }
  };
}
function data(name, age) {
  return {
    name: name,
    profession: age,
  };
}


//if sending the new object generate  will get print  else old object will get print
let result1 = cacheFunction(data);
console.log("New Object", result1("pratyusha", "Engineering"));
let result2 = cacheFunction(data);
console.log("Old Object", result1("pratyusha", "Engineering"));
let result3 = cacheFunction(data);
console.log("New Object", result1("sai", "Doctor"));
let result4 = cacheFunction(data);
console.log("New Object", result4("sai",1));
