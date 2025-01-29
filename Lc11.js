//Power of 2
function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}
