
export function Triangle(side1, side2, side3){

    // Use an arrow function for "kind"
    this.kind = () => {

        // Create variables to test for errors
        var sideProd = side1*side2*side3;
        var isTriangle = ((side1 + side2) > side3) && ((side1 + side3) > side2) && ((side2 + side3 > side1));

        // Test for errors
        if(!isTriangle || sideProd <= 0){
           throw new Error;
        }

        // Test for type of triangle
        if(side1 == side2 && side2 == side3){
            return 'equilateral';
        }
        if( side1 == side2 || side2 == side3 || side1 == side3){
            return 'isosceles';
        } else {
            return 'scalene';
        }
    }

}

