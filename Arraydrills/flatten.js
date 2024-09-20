function flatten(elements) {

  if (!Array.isArray(elements)) {//to check array or not
    return "Please Enter Array";

  }

    const newArray = [];
//to check array,values
    for (let index = 0; index < elements.length; index++) {
        if (Array.isArray(elements[index]) ) {

            newArray.push(flatten(elements[index]));//call function until get the value
        }
        else {
            newArray.push(elements[index]);
        }

    }
    return newArray;
}
module.exports=flatten;