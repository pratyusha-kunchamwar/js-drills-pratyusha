function invert(value){

    if (value === null || typeof value !== 'object') {  //when not an object
        return [];
    }
    let properties=Object.keys(value);//keys came in array
    let values=Object.values(value);//taking values in array

    let newObject={};
    
    for(let index=0;index<properties.length;index++){
        newObject[values[index]]=properties[index];  //keys converted to values values converted to keys
 }
 return newObject;
}
module.exports=invert;