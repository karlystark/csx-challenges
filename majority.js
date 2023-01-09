//Create a function majority that accepts an array and a callback.
//The callback will return either true or false
//Majority will iterate through the array and perform the callback on each element
//until it can be determined if the majority of the returnvalues from the callback are true.
//If the number of true returns is equal to the number of false returns, majority should return false.

//my solution:

function majority(arr, callback){
    //create counter variable that counts true values when el is passed through callback
    let countTrue = 0;
  
    //iterate through array using forEach. If el passed through callback returns true, increment counter.
    arr.forEach(el => {
      if(callback(el)){
        countTrue++;
      } 
    });
    //if the counter is less than or equal to half the array length, return false. else, return true.
    if(countTrue <= (arr.length/2)){
         return false;
      } return true;
  }
  
  // Uncomment these to check your work!
  const isOdd = function(num) { return num % 2 === 1; };
  console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
  console.log(majority([2, 3, 4, 5], isOdd)); // should log: false