export const steps = ((number, i=0) => {
    i++;

    if(number % 2 === 0 ){

        number = number /2;
        console.log(i);
        steps(number);
    }
    return i;

});