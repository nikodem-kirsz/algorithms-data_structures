function birthdayCakeCandles(candles) {
    // Write your code here
    let count = new Map()
    let max = 0
    for (let i=0; i< candles.length; i++) {
        if (candles[i] > max) {
           max = candles[i]
        } 
           count.set(candles[i], count.get(candles[i]) ? count.get(candles[i])+1 : 1)
    }
    return count.get(max)
}

console.log(birthdayCakeCandles([3,2,1,3]))