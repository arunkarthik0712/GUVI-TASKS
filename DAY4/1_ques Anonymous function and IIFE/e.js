// e.Return all the palindromes in an array

// Anonymous Function

var arr = ["madam", "racecar", "hello", "world"];
var palindromes = arr.filter(function (word) {
  return word === word.split("").reverse().join("");
});
console.log(palindromes);

// IIFE

(function (word) { 
    var palindromes = word.filter(function (word) {
      return word === word.split("").reverse().join("");
    });
    console.log(palindromes);
})(arr)
