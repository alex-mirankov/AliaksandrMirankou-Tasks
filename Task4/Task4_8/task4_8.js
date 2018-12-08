function palindrome(str) {
    var result = true;
    var strRev = str.split('')
        .reverse()
        .join('');
    if (str == strRev) {
        result = true;
    } else {
        result = false;
    }
    return result;
}