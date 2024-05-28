// e.Return all the palindromes in an array

// Arrow Function

var arr = ["madam", "racecar", "hello", "world"];
var palindromes = arr.filter((word) => {
  return word === word.split("").reverse().join("");
});
console.log(palindromes);