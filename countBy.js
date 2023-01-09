//Create a function countBy that accepts an array and a callback, and returns an object.
//countBy will iterate through array and perform callback on each element
//Each return val from callback will be saved as a key on the object.
//Val associated with each key is num of times that particular return val was returned.

//my solution:

function countBy(nums, callback){
//create empty result object variable
    let resultObj = {}; 

//use forEach to iterate through nums array.
//if the result of the callback is already present in the resultObj, increment val
//if result is not yet present in resultObj, set val = 1
    nums.forEach(el =>{
      if(resultObj[callback(el)]){
        resultObj[callback(el)]++; 
      } else {
        resultObj[callback(el)] = 1; 
      }
    })
    return resultObj;
  }
  
  // Uncomment these to check your work!
  function evenOdd(n) {
     if (n % 2 === 0) return 'even';
     else return 'odd';
   }
   const nums = [1, 2, 3, 4, 5];
   console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }