
function defaults(value,newObject){
    if (value === null || typeof value !== 'object') {  //when not an object
        return [];
    }
    for(let key in newObject){
        if(!value.hasOwnProperty(key)){ //if no property there we will add those value add property
            value[key]=newObject[key];
        }
    }
    return value



}
module.exports= defaults;