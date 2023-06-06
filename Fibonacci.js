//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
const N = 10
let calculations = 0
function fibonacci(n) {
    calculations++
    if ( n < 2) {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2) 
}

fibonacci(N)
console.log('Calculations for non optimized', calculations)

calculations = 0

function fibonacciMaster(n) {
    let cache = {}

    return function fib(n) {
        calculations++
        if ( n in cache) {
            return cache[n]
        } else {
            if (n < 2) {
                return n
            } else {
                cache[n] = fib(n-1) + fib(n-2)
                return cache[n]
            }
        }
    }
}

fibonacciMaster()(N)
console.log('Calculations for optimized', calculations)
