//Create a function groupBy that accepts an array and a callback, and returns on object.
//groupBy will iterate through the array and perform the callback on each element.
//Each return value from the callback will be saved as a key on the object.
//The value associated w each key will be an array of all the elements that resulted in that return val when passed into callback.


//my solution:

function groupBy(arr, callback){
//create empty result object
  let resultObj = {}; 

//use forEach to iterate through array.
//if result of callback'd el is not already a key in resultObj, set the val to current el
//if it is already in the resultObj, push the el into the existing value array 
  arr.forEach(el => {
    if(!resultObj[callback(el)]){
    resultObj[callback(el)] = [el]; 
    } else{
      resultObj[callback(el)].push(el); 
    }
  });
     
    return resultObj; 
  }
  
  // Uncomment these to check your work!
  const decimals = [1.3, 2.1, 2.4];
  const floored = function(num) { return Math.floor(num); };
  console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
  