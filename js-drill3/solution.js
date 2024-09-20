var inventory = require('../js-drill-2/cars');

//get the information with id
function getInformationWithId(targetid) {
    if (targetid == null || targetid == undefined)//when id not present 
        return "Enter Correcrt Id";
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].id === targetid) {
            return `Car ${targetid} is a ${inventory[i].car_year} ${inventory[i].car_make} ${inventory[i].car_model}`;
        }

    }
    return "No particular id car Exists In Inventory";                          //when the id not matches to the given data
}



//for last car info

function lastCarInfo() {
    if (inventory.length == 0) {  //when no cars there in the inventory
        return "No car In the Inventory"
    }
    let last = inventory[inventory.length - 1];
    return `Last Car is a ${last.car_make}  ${last.car_model}`
}



//car models alphabetically
function carModelsAlphabetically() {
    if (inventory.length == 0) {  //when no cars there in the inventory
        return "No car In the Inventory"
    }
    let modelNames = [];
    for (let i = 0; i < inventory.length; i++) {
        modelNames.push(inventory[i].car_model);

    }
//sort hear
    modelNames.sort((a, b) => {
        return a.localeCompare(b, undefined, { sensitivity: 'variant', numeric: true });
    });
    return modelNames.join('\n');
}


//all the years of cars

function allYearsOfcars() {
    let years = [];

    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].hasOwnProperty('car_year'))
            years.push(inventory[i].car_year);
        else
            years.push("propertyt not there");


    }
    return years;
}


//older cars data
function findOlderCars() {
    let count = 0;
    let Oldercars = [];
    let years = allYearsOfcars();
    for (let i = 0; i < years.length; i++) {
        if (years[i] < 2000) {
            count++;
        }


    }
    console.log(`Before 2000 the no:of cars${count}`);
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].car_year < 2000) {
            Oldercars.push(inventory[i]);
        }


    }
    return Oldercars;
}



//  Bmw,Audi cars
function getBMWAndAudi() {
    let cars = [];
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].car_make === 'BMW' || inventory[i].car_make === 'Audi')
            cars.push(inventory[i])


    }
    return JSON.stringify(cars);
}

module.exports={getInformationWithId,lastCarInfo,carModelsAlphabetically,allYearsOfcars,findOlderCars,getBMWAndAudi};