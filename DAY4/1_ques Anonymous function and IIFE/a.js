// a.Print odd numbers in an array

// Anonymous Function
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var odd = function(){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
}
odd();

// IIFE
(function (obj) {
    for (var i = 0; i < obj.length; i++) {
        if (obj[i] % 2 !== 0) {
            console.log(obj[i]);
        }
    }
})(arr);