class Polygon {
    constructor(sidesArray){
        this.sides = sidesArray
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((accum, value) => accum + value, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        /* 
        Take three sides of a triangle and add them in pairs.
        The sum of any two sides is greater than (not equal to) the third side.
        If that is not true, then it is not possible to construct a triangle
        with the given side lengths
        */
        const [a, b, c] = this.sides;

        return (a + b > c) && (b + c > a) && (c + a > b)
    }
}

class Square extends Polygon {
    get isValid() {
        /* 
        Squares are valid when the lengths of all sides are equal
        */
        const [a,b,c,d] = this.sides

        return (a === b && a === c && a === d)
    }

    get area() {
        const [a,b,c,d] = this.sides
        return a * b
    }
}