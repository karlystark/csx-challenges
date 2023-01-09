//Create a function goodKeys that accepts an object and a callback.
//Callback will return either true or false.
//goodKeys will iterate through the object and perform the callback on each value.
//goodKeys will return an array consisting only of keys whose associated values yielded true return val from callback.

//my solution:

function goodKeys(obj, callback){
//create empty result array variable
    let resultArr = []; 

//iterate through object using let..in loop
//if the value passed through callback is true, push the key associated into resultArr
    for(let key in obj){
      if(callback(obj[key])){
        resultArr.push(key);
      }
    }
    return resultArr; 
  }
  
  // Uncomment these to check your work!
  const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
  function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
  console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']