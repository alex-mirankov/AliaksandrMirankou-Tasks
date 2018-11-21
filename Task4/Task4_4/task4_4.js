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