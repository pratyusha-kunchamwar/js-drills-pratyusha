var users = require('./usersdata.js');

function usersLovevideoGames() {
    let regex = /\bvideo\s*games?\b/i;
    let names = [];

    for (let user in users) {
        let game = users[user].interests;
        for (let i=0; i<game.length;i++){
            if (regex.test(game[i])) {
                        names.push(user);
                        break;
                    }

        }

}
    return names;

}
function usersWithCountry(targetcountry) {
    if(targetcountry==null||targetcountry==undefined) //when the country is not found
        return "Enter Valid country";
    let persons = [];
    for (let user in users) {

        let Object = users[user];

        if (Object.nationality === targetcountry) {
            persons.push(user)
        }

    }
    return persons;

}
var users = require('./usersdata.js');
function usersWithMastersDegree() {
    let persons = [];
    let regex=/\bmasters\b/i;
    for(let user in users) {

        let Object= users[user];

        if (regex.test(Object.qualification) ) {
            persons.push(user)
        }

    }
    return persons;

}
var users = require('./usersdata.js');
function designationGroupByLanguage(){
    const group={ }
    let regex=/(Javascript|Python|Golang)/ig
    for(let user in users ){
        let Object=users[user];
        let designation=Object. desgination;
        let language=designation.match(regex); //hear we check match with reagex
       if(language.length==1){
        language=language[0];
       }
       if(!group.hasOwnProperty(language)) //adding new property hear if not there
       {
        group[language]=[];
       }
       group[language].push(user);
        
    }
    return group;
}

module.exports = { usersLovevideoGames,usersWithCountry,usersWithMastersDegree,designationGroupByLanguage};