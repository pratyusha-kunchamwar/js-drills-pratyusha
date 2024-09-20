
function map(elements,callBack){
    if(!Array.isArray(elements)){//to check array or not
        return "Please Enter Array";
        
    }
    let newArray=[];
    for(let index=0;index<elements.length;index++){
        newArray.push(callBack(elements[index],index,elements));//push particular return value
    
    }
    
    return newArray;
}
module.exports=map;
