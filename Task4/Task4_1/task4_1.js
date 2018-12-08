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

function prime(n) {
    var result = true;
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            result = false;
        }
    }
    return result;
}