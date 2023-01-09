//Create a function prioritize that accepts an array and a callback.
//The callback will return either true or false.
//Prioritize will iterate through the array and perform the callback on each element
//Returns a new array, where all elements that yeilded return val true come first in the array
//and the rest of the elements come second.

//my solution:

function prioritize(arr, callback){
//create two variables that hold true and false result values
    let resultArrTrue = [];
    let resultArrFalse = []; 

//use forEach to apply callback to each element of array.
//if result is true, push to true array
//if result is false, push to false array
    arr.forEach(el =>{
      if(callback(el)){
        resultArrTrue.push(el);
      } else {
        resultArrFalse.push(el);
      }
    })
//create a result array that concatenates false onto true result array
//return that concatenated result array
    let resultArr = resultArrTrue.concat(resultArrFalse); 
    return resultArr;
  }
  
  // Uncomment these to check your work!
  function startsWithS(str) { return str[0].toLowerCase() === 's'; }
  const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
  console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']