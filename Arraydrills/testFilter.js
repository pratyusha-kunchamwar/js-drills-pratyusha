const items = require('./arrays');
const filter = require('./filter');

//even numbers in array
let evenNumbers = filter(items, (currentValue) => {
    if (currentValue % 2 == 0)
        return true;

});
console.log("EvenNumbers :", evenNumbers);

//odd numbers in array
let oddNumbers = filter(items, (currentValue) => {
    if (currentValue % 2 == 1)
        return true;

});
console.log("OddNumbers :", oddNumbers);

//Items divides with 6
let sixMultiple = filter(items, (currentValue) => {
    if (currentValue % 6 == 0)
        return true;

});
console.log("SixMultiple:", sixMultiple);



//objects
const users = [
    { id: 1, name: 'Alice', age: 25, isStudent: false },
    { id: 2, name: 'Bob', age: 30, isStudent: true },
    { id: 3, name: 'Charlie', age: 22, isStudent: true }

];

// Filter users who are students
const students = users.filter(user => user.isStudent);

console.log('Students:', students);


