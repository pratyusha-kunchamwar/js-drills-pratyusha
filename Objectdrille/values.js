function values(value) {
    if (value === null || typeof value !== 'object') {  //when not an object
        return [];
    }
    let newArray=[]  //Initialize empty array
    for (let key in value) {
        newArray.push(value[key]);
    }
    return newArray;

}
module.exports=values;
