// h.Rotate an array by k times

// Anonymous Funtion
let rotate = function (arr, k) { 
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}
console.log(rotate([1, 2, 3, 4, 5], 2));

// IIFE
(function (arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr);
})([1, 2, 3, 4, 5], 2);
