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