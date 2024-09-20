var{ usersLovevideoGames,usersWithCountry,
    usersWithMastersDegree,designationGroupByLanguage}=require('./solutions')

console.log(usersLovevideoGames());
console.log(usersWithCountry("Germany"));
 // data of the germany user

console.log(usersWithCountry(null));
console.log(usersWithCountry());
// enter valid country out put will come
console.log(usersWithMastersDegree());
console.log(designationGroupByLanguage());
// all users whose designation masters will be the ouput