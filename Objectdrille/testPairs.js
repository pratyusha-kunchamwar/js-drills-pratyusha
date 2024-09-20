const testObject=require('./objects');
const pairs=require('./pairs');


//out put key value pairs
console.log("Key Value Pairs : ",pairs(testObject));


//empty array  will get created
console.log(pairs({ }));
