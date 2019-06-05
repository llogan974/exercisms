import { catchClause } from "@babel/types";

export function Triangle(side1, side2, side3){
    this.kind = () => {
            var sideProd = side1*side2*side3;
            var isTriangle = ((side1 + side2) > side3) || ((side1 + side3) > side2) || ((side2 + side3 > side1));
            if(!isTriangle || sideProd <= 0){
                throw toThrow();
            }
            console.log(isTriangle);

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

