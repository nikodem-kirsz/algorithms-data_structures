function* simpleGenerator() {
    yield 1
    yield 2
    yield 3
}

function* generateId() {
    let id = 1
    while(true) {
        const increment = yield id
        if (increment != null) {
            id += increment
        } else {
            id++
        }
    }
}

function* iterableGenerator(arr) {
    // for(let value of arr) {
    //     yield value
    // }
    yield* arr
}

// const generator = simpleGenerator()
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())

const generator2 = generateId()
console.log(generator2.next())
console.log(generator2.next(10))
console.log(generator2.return(100))
console.log(generator2.return(100))
console.log(generator2.return(100))
console.log(generator2.throw(new Error('new error')))

// const arr = [1,2,3,4,8,667,13,4]
// const generator3 = iterableGenerator(arr)
// console.log(generator3.next())
// console.log(generator3.next())
// console.log(generator3.next())