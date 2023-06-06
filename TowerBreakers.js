function towerBreakers(n, m) {
    // Write your code here
    if (m==1) {
        return 2
    }
    return n % 2 == 1 ? 1 : 2

}


console.log(towerBreakers(2,6))
