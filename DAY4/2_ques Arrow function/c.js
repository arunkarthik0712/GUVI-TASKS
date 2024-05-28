// c.Sum of all numbers in an array

// Arrow Function

var num = [1, 2, 3, 4, 5];

var sum = 0;

var total = (n) => {
  for (var i = 0; i < n.length; i++) {
    sum += n[i];
    }
    console.log(sum);
};
total(num);