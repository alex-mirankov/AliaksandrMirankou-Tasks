function unique(arr) {
    var arrayUnique = [];
    for (var i = 0; i < arr.length; i++) {
        if (arrayUnique.indexOf(arr[i]) == -1) {
            arrayUnique.push(arr[i]);
        }
    }
    return arrayUnique;
}