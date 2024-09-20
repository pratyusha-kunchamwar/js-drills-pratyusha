const testObject=require('./objects');
const mapObject=require('./mapObject');

//to change all Properties

console.log("Change all properties of Object",mapObject(testObject,(value,key,testObject)=>{

    if(typeof value=='number')
        return value+10;
    else if(typeof value=='string')
        return value.toUpperCase();
    return value
   

}));
