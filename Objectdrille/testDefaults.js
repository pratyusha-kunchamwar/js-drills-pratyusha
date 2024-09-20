const testObject=require('./objects');
const defaults=require('./defaults');

//the Properties which are not there in test those will get added
console.log("Add new Properties:" ,defaults(testObject,{age :22,student:true}));