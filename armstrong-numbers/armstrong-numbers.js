//
// This is only a SKELETON file for the 'Armstrong numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const validate = (number) => {


  function getLength(num){
   var length = Math.log(num) * Math.LOG10E + 1 | 0;  // for positive integers
   return length;

  }
  var length = getLength(number);

// If length is 1, true; 2, false.
if(length == 1){
  return true;
} if(length == 2){
  return false;
}

// Turn into an array to do math with each digit.
let [...numArray] = number.toString();

// Create an accumulator to hold the value
var accumulator = '';

var armstrong = null;

// Loop over the array
for(let key of numArray){

  // Turn the key into an integer (not a string)
  key = parseInt(key);


  // Add to the accumulator, with math and concat
  accumulator += key.toString();
  armstrong += Math.pow(key, length);


  // Check if the concat equals the math value
  if(accumulator.length == length){

    // If values match, it is armstrong number
    if(armstrong == accumulator){
      return true;
    } else {
      return false;
    }
  }


}

};
