function pairs(value){
    if (value === null || typeof value !== 'object') {  //when not an object
        return [];
    }
    let newArray=[];
    for(let key in value){
        newArray.push([key,value[key]]);

    }
    return newArray;
}
module.exports= pairs;