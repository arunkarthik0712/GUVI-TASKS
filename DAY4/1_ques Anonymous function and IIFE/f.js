// f.Return median of two sorted arrays of the same size

// Anonymous Function
let median = function (a, b) { 
    var c = a.concat(b);
    c.sort((a, b) => a - b);
    var n = c.length;
    if (n % 2 == 0) {
        return (c[n / 2] + c[n / 2 - 1]) / 2;
    }
    else {
        return c[Math.floor(n / 2)];
    }
}
console.log(median([1, 2, 3], [4, 5, 6]));

// IIFE
(function (a, b) {
    var c = a.concat(b);
    c.sort((a, b) => a - b);
    var n = c.length;
    if (n % 2 == 0) {
        console.log((c[n / 2] + c[n / 2 - 1]) / 2);
    }
    else {
        console.log(c[Math.floor(n / 2)]);
    }
 })([1, 2, 3], [4, 5, 6]);