
function find(elements,callBack){
    if(!Array.isArray(elements)){//to check array or not
        return "Please Enter Array";
       
    }
    for(let index=0;index<elements.length;index++){
        if(callBack(elements[index],index,elements)){//if satisfy particular condition given by user then return it
            return elements[index];
        }

    }
    return "undefined";  //not found any element

}
module.exports=find;

