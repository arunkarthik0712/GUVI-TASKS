// 4. write a class to calculate the Uber price.
class Uber {
    constructor(distance, time) {
        this.distance = distance;
        this.time = time;
    }
    calculatePrice() {
        return this.distance * this.time;
    }
}
const uber = new Uber(10, 2);
console.log("Total price:",uber.calculatePrice());