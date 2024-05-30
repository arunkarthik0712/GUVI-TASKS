class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `Circle[radius=${this.radius},color=${this.color}]`;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

const circle1 = new Circle();
console.log(circle1.toString()); 

const circle2 = new Circle(2.5);
console.log(circle2.toString()); 

const circle3 = new Circle(2.5, "blue");
console.log(circle3.toString()); 

circle1.setRadius(3.0);
console.log(circle1.getRadius()); 

circle1.setColor("green");
console.log(circle1.getColor()); 

console.log(circle1.getArea()); 
console.log(circle1.getCircumference()); 
