export const steps = (start) => {
    // Catch Errors
    if(start <= 0 ){
        throw new Error;
    }
    // Repeat the function as long as a condition is true:
    // I need a loop!
    for(var i = 0; start > 1; i++){

        // Check if any remainder when dividing. If not,
        // it is an odd number
        if(start % 2 !== 0 ){
            start = (start * 3) + 1;
            // add to i because it is still in the loop
            i++;
            }

        if(start % 2 == 0 ){
            // No need for i++ because it will
            //loop again, adding 1;
            start = start / 2;
            }
        }
        return i;

}
