const {getInformationWithId,lastCarInfo,
    carModelsAlphabetically,allYearsOfcars,findOlderCars}=require('./solution');
console.log(getInformationWithId(44));
// particulat id data
console.log(getInformationWithId());
// Enter correct id message will get  print
console.log(getInformationWithId(9999));
// Noparticular id will exists
console.log(lastCarInfo());
// last car Data will come
console.log(carModelsAlphabetically());
//sort alphbatically
console.log(allYearsOfcars());
// car years output in array
// if some dont have year property "Property not ther"
console.log(findOlderCars());
// the nof cars older then 2000
//the catds data in array get prints which are older then 2000

console.group(getBMWAndAudi());
// in json formate dta get print of the cars

