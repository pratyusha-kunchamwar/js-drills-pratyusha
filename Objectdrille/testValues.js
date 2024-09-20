const testObject=require('./objects');
const values=require('./values');


console.log("Object values",values(testObject));
//all keys in array get printed

console.log(values({}));
//Empty array the output is