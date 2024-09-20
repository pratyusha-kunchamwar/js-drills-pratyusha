const items = require('./arrays');
const each = require('./each');

//for this out put will be please enter array
each({ a: 1 }, (currentValue) => {

    console.log(currentValue);

})
//to get values on particular index
each(items, (currentValue) => {

    console.log("Array values: ", currentValue);
})
//to get value,index
each(items, (currentValue, index) => {

    console.log("values ,Indexes", currentValue, index);
})
//to get all data
each(items, (currentValue, index, arr) => {

    console.log("Array Data :", currentValue, index, arr);
})