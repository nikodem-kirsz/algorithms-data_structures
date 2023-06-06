function superDigit(n, k) {
    // Write your code here
    // n = n.split('').map(n => Number.parseInt(n)).reduce((prev,cur) => prev + cur, 0)
    n = n.split("").reduce((a, b) => +a + +b) * k + "";
    return n.length > 1 ? superDigit(n, 1) : n.charAt(0)
}

console.log(superDigit('9875', 4))