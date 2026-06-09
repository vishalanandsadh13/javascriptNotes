 function gretestCommonDivisor(a, b) {
    if (b === 0) {
        return a;
    } else {
        return gretestCommonDivisor(b, a % b);
    }   
}