function average(arr) {
    var summ = 0;
    for (var i = 0; i < arr.length; i++) {
        summ += arr[i];
    }
    return(summ / arr.length);
}