function max(arr) {
    var maximum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (maximum < arr[i]) {
            maximum = arr[i];
        }
    }
    return maximum;
}