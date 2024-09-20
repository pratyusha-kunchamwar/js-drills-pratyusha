const items = require('./arrays');
const map = require('./map');


//when sent object
let emptyArray = map({}, (currentValue, index) => {
    return index + 2;
});
console.log(emptyArray);
//manipulating the value squares
let squareArray = map(items, (currentValue) => currentValue * currentValue);
console.log("squires of numbers :", squareArray);

//manipulating index
let result = map(items, (currentValue, index) => {
    return index + 2;
});
console.log("Indexes :", result);

//working with objects



const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
let ans = map(users, (user) => {
    return {
        name: user.name,
        age: user.age * user.age
    };
});
console.log("squares of the ages ", ans);

//print names 
let namesArray = map(users, (user) => user.name);
console.log("Names  : ", namesArray);