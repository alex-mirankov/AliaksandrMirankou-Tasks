function firstSimpleN(limit) {
    var n = 100;
    var count = 0;
    var arr = [];
    for (var i = 2; i < n; i++) {
        if (count < limit) {
            if (prime(i)) {
                arr.push(i);
                count++;
            }
        }
    }
    return arr;
}

function simpleToN(n) {
    var arr = [];
    for (var i = 2; i < n; i++) {
        if (prime(i)) {
            arr.push(i);
        }
    }
    return arr;
}

function prime(n) {
    var result = true;
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            result = false;
        }
    }
    return result;
}
/*-------------------------------------------------*/
function fibonachi(n) {
    var fib = 0;
    var prevNumber = 1;
    var nextNumber = 1;
    var summ = 0;
    var result = 0;
    for (var i = 0; i <= n; i++) {
        fib = prevNumber + nextNumber;
        prevNumber = nextNumber;
        nextNumber = fib;
        if (fib % 2 === 0) {
            summ += fib;
            result += summ;
        }
    }
    return result;
}
/*-------------------------------------------------*/
function lastNumbers(n) {
    var summ = 0;
    var limit = 10000000000;
    for (var i = 1; i <= n; i++) {
        var result = 1;
        for(var j = 1; j <= i; j++){
            result *= i;
            if(result >= limit){
                result %= 10000000000;
            }
        }
        summ += result;
    }
    var numberString = summ.toString();
    var subString = numberString.substr(numberString.length - 10, numberString.length)
    return subString;
}
/*-------------------------------------------------*/
function average(arr) {
    var summ = 0;
    for (var i = 0; i < arr.length; i++) {
        summ += arr[i];
    }
    return(summ / arr.length);
}
/*-------------------------------------------------*/
function max(arr) {
    var maximum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (maximum < arr[i]) {
            maximum = arr[i];
        }
    }
    return maximum;
}
/*-------------------------------------------------*/
function unique(arr) {
    var arrayUnique = [];
    for (var i = 0; i < arr.length; i++) {
        if (arrayUnique.indexOf(arr[i]) == -1) {
            arrayUnique.push(arr[i]);
        }
    }
    return arrayUnique;
}
/*-------------------------------------------------*/
function palindrome(str) {
    var result = true;
    var strRev = str.split('');
    strRev = strRev.reverse();
    strRev = strRev.join('');
    if (str == strRev) {
        result = true;
    } else {
        result = false;
    }
    return result;
}
/*-------------------------------------------------*/
function sumOfNumber(str) {
    var summ = 0;
    for (var i = 0; i < str.length; i++) {
        summ += +str[i];
    }
    return summ;
}