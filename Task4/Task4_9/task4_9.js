function sumOfNumber(str) {
    var summ = 0;
    for (var i = 0; i < str.length; i++) {
        summ += +str[i];
    }
    return summ;
}