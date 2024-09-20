function each(elements,callBack){
    if(!Array.isArray(elements)){//to check array or not
        console.error( "Please Enter Array");
        return ;
    }
  
    for(let index=0;index<elements.length;index++){
    
            callBack(elements[index],index,elements);  //for each iteration call back will fire

    }

    
}
module.exports = each;
