const items = require('./arrays');
const find = require('./find');

//if enter not an array empty then out put is "please Enter array "
//even num
let firstEvenNumber = find(items, (currentValue) => {
    return currentValue % 2 == 0;
});
console.log('firstEvenNumber :', firstEvenNumber);


//positive num
let firstPositiveNumber = find(items, (currentValue) => {
    return currentValue > 0;
});
console.log('firstPositiveNumber :', firstPositiveNumber);

//negative num
let firstNegativeNumber = find(items, (currentValue) => {
    return currentValue < 0;
});
console.log('firstNegativeNumber :', firstNegativeNumber);



//objects
const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 }
];

const userIdToFind = 2;

const foundUser = users.find(user => user.id === userIdToFind);

if (foundUser) {
    console.log('User found:', foundUser);
} else {
    console.log('User not found');
}
