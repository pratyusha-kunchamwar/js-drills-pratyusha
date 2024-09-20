function mapObject(value, callBack) {
    if (value === null || typeof value !== 'object') {  //when not an object
        return [];
    }
    
    let newObject = {};
    for (let key in value) {
        newObject[key] = callBack(value[key], key, value);   //push particular return value  
    }

    return newObject;
}
module.exports = mapObject ;