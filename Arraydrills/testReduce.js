const items = require('./arrays');
const reduce = require('./reduce');


//if not an array
let notArray = reduce({}, (sum, currentValue) => {
    return sum + currentValue;
})
console.log(notArray);


//sum
let sum = reduce(items, (sum, currentValue) => {
    return sum + currentValue;
})
console.log("sum of the Numbers:", sum);


//product
let product = reduce(items, (product, currentValue) => {
    return product * currentValue;
})
console.log("Product of the Numbers: ", product);

//max element
let maxValue = reduce(items, (max, currentValue) => {
    return (max < currentValue) ? currentValue : max;
})
console.log("MaxValue :", maxValue);


//objects
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];


const totalAge = users.reduce((accumulator, currentUser) => {
    return accumulator + currentUser.age;
}, 0);
console.log("totalAge :", totalAge);
