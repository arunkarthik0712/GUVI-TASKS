// g.Remove duplicates from an array

// Anonymous Function
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var unique = arr.filter(function(item, pos) {
    return arr.indexOf(item) == pos;
});
console.log(unique);

// IIFE

(function (n) { 
    var unique = n.filter(function(item, pos) {
        return n.indexOf(item) == pos;
    });
    console.log(unique);
})(arr)