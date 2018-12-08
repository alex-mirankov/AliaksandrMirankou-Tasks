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