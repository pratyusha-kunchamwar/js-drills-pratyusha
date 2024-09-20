//Individual person Email
function individualEmail(arrayOfObjects) {
    if (arrayOfObjects.length < 1) {
        return "The users Data is Empty";
    }
    //accessing individual email
    let emails = [];
    for (let user of arrayOfObjects) {
        if (user.hasOwnProperty('email')) {

            emails.push(user.email);

        }
        else {
            emails.push("The property wont exist");
        }
    }
    return emails;
}




//Individual hobbies with targetAge
function hobbies(arrayOfObjects, targetAge) {
    if (arrayOfObjects.length < 1) {
        return "The users Data is Empty";

    }
    //If the age is positive
    if (targetAge >= 1) {
        for (let user of arrayOfObjects) {
            if (user.age == targetAge) {
                return user.hobbies;
            }

        }
        return "The targetAge is not Present in The users Data";
    }
    else {

        return "Enter  age correctly";
    }
}



//student names with individual country
function students(arrayOfObjects, targetcountry) {
    if (arrayOfObjects.length < 1) {
        return "The users Data is Empty";
    }
//if country not defined
    else if (targetcountry === undefined || targetcountry === null || targetcountry.trim().length === 0) {

        return "Country is Empty";
    }
    else {
        let names = []
        //accessing persons with target country
        for (let user of arrayOfObjects) {
            if (user.isStudent && user.country === targetcountry) {
                names.push(user.name);

            }

        }
        //no person is found
        if (names.length == 0) {
            return "No Student is There";
        }
        else {
            return names;
        }

    }

}


// At particular index person data
function indexPosition(arrayOfObjects, index) {
    if (arrayOfObjects.length < 1) {
        return "The users Data is Empty";
    }
    else if (index >= 0 && index < arrayOfObjects.length) { /*check index is in range*/
        const person = arrayOfObjects[index];
        let Name = person.hasOwnProperty('name') ? person.name : "Empty";
        let City = person.hasOwnProperty('city') ? person.city : "Empty"
        return ` Name :${Name} \n City :${City}`;
    }
    else {
        return "Index out of the bound";//index not matches
    }
}





//Individual person ages
function individualAges(arrayOfObjects) {
    if (arrayOfObjects.length < 1) {
        return "The users Data is Empty";
    }
    else {
        //accessing each one ages
        let ages = []

        for (let user of arrayOfObjects) {
            if (user.hasOwnProperty('age'))
                ages.push(user.age);
            else
                ages.push("age Property not there")

        }
        return ages;

    }


}


// Index[0] Hobbies of each persons
function firstHobbies(arrayOfObjects) {
    if (arrayOfObjects.length < 1) {
        return "The users Data is Empty";
    }
    else {
        let Hobbies = [];
        //accessing user hobbies
        for (let user of arrayOfObjects) {
            if (user.hasOwnProperty('hobbies')) {
                if (user.hobbies.length >= 1)
                    Hobbies.push(user.hobbies[0]);
                else
                    Hobbies.push("Empty");
            }
            else
                //if hobby not exist
                Hobbies.push("Hobbies Property not there")

        }
        return Hobbies;


    }
}






//name ,email of particular age person
function Data(arrayOfObjects, targetAge) {
    if (arrayOfObjects.length < 1) {
        return "The users Data is Empty";
    }
    if (targetAge >= 1) {
        let data = [];
        //all users data matches target age
        for (let user of arrayOfObjects) {

            if (user.age == targetAge) {
                data.push([user.age, user.email])

            }
        }
        //particular age not found
        if (data.length == 0)
            return "The aged Data not found";
        return data;
    }
    else {
        return "Enter correct age"; //when age is not positive
    }
}



//City and country of each object
function Location(arrayOfObjects) {
    if (arrayOfObjects.length < 1) {
        return "The users Data is Empty";
    }
    //city and location of each person
        let newArray=[]
        for (let user of arrayOfObjects){
            newArray.push([user.city,user.country]);
        }
           


    
    return newArray;


}



module.exports = { individualEmail, hobbies, students, indexPosition, individualAges,  firstHobbies, Data, Location };