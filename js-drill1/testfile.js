const arrayOfObjects = require('./person.js');
var { individualEmail, hobbies, students,
    indexPosition, individualAges, firstHobbies: firstHobbies, Data, Location } = require('./solutions.js');
console.log(individualEmail(arrayOfObjects));
// If the array is empty then give out put as "Data is empty"
// If the property not exists then print "it wont exists"


console.log(hobbies(arrayOfObjects, 25));
// the age 25 data is coming
console.log(hobbies(arrayOfObjects,));
console.log(hobbies(arrayOfObjects, -3));
console.log(hobbies(arrayOfObjects, 0.6));
// the output will print as the Enter age correctly
console.log(hobbies(arrayOfObjects, 99));
// the output "The age is not Present in The users Data"




console.log(students(arrayOfObjects, ' '));
// country is empty
console.log(students(arrayOfObjects,));
//empty string
console.log(students(arrayOfObjects, 'Australia'));
//students who live in australia
console.log(students(arrayOfObjects, 'abc'));
//the output is no student is there



console.log(indexPosition(arrayOfObjects, 0));
// particular index data will come
console.log(indexPosition(arrayOfObjects, -1));
console.log(indexPosition(arrayOfObjects, 100));
// Index out of the bound
console.log(indexPosition(arrayOfObjects, 0));
// If name not exist ,or city not exist it will print as "Empty";


console.log(individualAges(arrayOfObjects));
// individual age will get printed
// if some object not gave that property it print as "the property not exist" at that particular place
// out put [ 'age Property not there', 25, 35, 28, 32, 33, 29, 31, 27, 34 ]



console.log(firstHobbies(arrayOfObjects));
// hobbies data will print
// if some object is not given the "property not there "will be printed
// if hobbies array is empty it take input as "empty ";



console.log(Data(arrayOfObjects, 25));
// all names emails of 25 age will come
console.log(Data(arrayOfObjects, 909));
// The age Data not found
console.log(Data(arrayOfObjects));
// Enter the correct age


console.log(Location(arrayOfObjects));
//the out put is city and country of the object