// d.Return all the prime numbers in an array

// Anonymous Function
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var prime = function(arr){
    var primeArr = [];
    for(var i=0; i<arr.length; i++){
        var flag = 0;
        for(var j=2; j<arr[i]; j++){
            if(arr[i]%j==0){
                flag++;
            }
        }
        if(flag==0){
            primeArr.push(arr[i]);
        }
    }
    return primeArr;
}

console.log(prime(arr));

// IIFE
(function(arr){
    var primeArr = [];
    for(var i=0; i<arr.length; i++){
        var flag = 0;
        for(var j=2; j<arr[i]; j++){
            if(arr[i]%j==0){
                flag++;
            }
        }
        if(flag==0){
            primeArr.push(arr[i]);
        }
    }
    console.log(primeArr);
})(arr);