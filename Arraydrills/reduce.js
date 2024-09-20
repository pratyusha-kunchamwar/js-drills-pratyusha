
function reduce(elements,callBack,startValue){
    if(!Array.isArray(elements)){//to check array or not
        console.log( "Please Enter Array");
        return [];
    }
    
    let newValue=(startValue!==undefined)?startValue:elements[0];//for the starting value
    for(let index=1;index<elements.length;index++){
         newValue= callBack(newValue,elements[index],index,elements);

    }
    return newValue;
}
module.exports=reduce;