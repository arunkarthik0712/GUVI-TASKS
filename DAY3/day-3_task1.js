// DAY 3 TASK

// NAME : Arun Karthik S
// EMAIL : arunkarthik0710@gmail.com

// 1. how to compare two json have the same properties without order?   
// let obj1 = {name:"person1",age:5};
// let obj2 = { age: 5, name: "person1" }; 



function areObjectsEqual(obj1, obj2) {

    let keys1 = Object.keys(obj1).sort();
    let keys2 = Object.keys(obj2).sort();

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: "person1" };

console.log(areObjectsEqual(obj1, obj2));