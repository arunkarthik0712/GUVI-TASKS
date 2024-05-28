// c.Sum of all numbers in an array

// Anonymous Function

var num = [1, 2, 3, 4, 5];

var sum = 0;

var total = function (n) {
  for (var i = 0; i < n.length; i++) {
    sum += n[i];
    }
    console.log(sum);
};
total(num);

// IIFE
(function (a) { 
    for (var i = 0; i < a.length; i++) {
    sum += a[i];
    }
    console.log(sum);
})(num)