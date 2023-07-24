function higherOrderFunction(callback) {
    console.log("Preparing to call the callback...")

    callback()

    console.log("Callback executed")
}

function callbackFunction() {
    console.log("This is a callback function")
}

higherOrderFunction(callbackFunction)

function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier
    }
}

const double = createMultiplier(5)
console.log(double(5)) // Output 10

console.log('Creating multiplier: 3*10: ', createMultiplier(3)(10))


// Memoization with factorial
function factorial(n) {
    if (n === 0 || n == 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

function memoize(fn) {
    const cache = new Map()
    return function (arg) {
        if (cache.has(arg)) {
            return cache.get(arg)
        } else {
            const result = fn(arg)
            cache.set(arg, result)
            return result
        }
    }
}

// Memoize the factorial function
const memoizedFactorial = memoize(factorial)

console.time("Memoized Factorial for 20")
console.log(memoizedFactorial(20))
console.timeEnd("Memoized Factorial for 20")

console.time("Memoized Factorial for 21")
console.log(memoizedFactorial(21))
console.timeEnd("Memoized Factorial for 21")

console.time("Non-Memoized Factorial")
console.log(factorial(20))
console.timeEnd("Non-Memoized Factorial")

console.time("Non-Memoized Factorial for 21")
console.log(factorial(21))
console.timeEnd("Non-Memoized Factorial for 21")

// Memoization with Fibonacci

// 1, 1, 2, 3, 5 ,8, 13
function fibonacci(n) {
    if (n == 1 || n == 2) return 1
    else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

console.time("Non-memoized fibonacci for 20")
console.log(fibonacci(20))
console.timeEnd("Non-memoized fibonacci for 20")

console.time("Non-memoized fibonacci for 22")
console.log(fibonacci(22))
console.timeEnd("Non-memoized fibonacci for 22")

function memoize(fn) {
    const cache = new Map()
    return function(arg) {
        if (cache.has(arg)) {
            return cache.get(arg)
        } else {
            const result = fn(arg)
            cache.set(arg, result)
            return result
        }
    }
}

const memoizedFibonacci = memoize(fibonacci)

console.time("Memoized fibonacci for 20")
console.log(memoizedFibonacci(20))
console.timeEnd("Memoized fibonacci for 20")

console.time("Memoized fibonacci for 22")
console.log(memoizedFibonacci(22))
console.timeEnd("Memoized fibonacci for 22")