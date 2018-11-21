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