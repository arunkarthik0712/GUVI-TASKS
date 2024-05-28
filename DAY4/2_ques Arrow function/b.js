// b. Convert all the strings to title caps in a string array

// Arrow Function

var titleCaps = (str) =>{
    var str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
var str = "hello world";
console.log(titleCaps(str));