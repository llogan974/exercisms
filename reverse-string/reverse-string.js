export const reverseString = (testString) => {
    // Use let because each iteration changes the value.
    // Create the variable, though it has no value. 
    let newArray;
    let arrayReverse;

    // If it is an empty string, return. 
    if(!testString){
        return '';
    }
    // Split into an array of each character.
    newArray = testString.split('');

    // Reverse the order of the array. 
    arrayReverse = newArray.reverse();

    // Use "join" instead of toString to that there are no commas.
    return(arrayReverse.join(''));
};