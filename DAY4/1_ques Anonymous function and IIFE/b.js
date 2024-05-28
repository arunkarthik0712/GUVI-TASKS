// b. Convert all the strings to title caps in a string array

// Anonymous Function

var titleCaps = function(str) {
    var str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
var str = "hello world";
console.log(titleCaps(str));

// IIFE
(function (str) { 
    var str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' '));
})("welcome to js")