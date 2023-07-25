function* generateFibonacci() {
    let prev = 0, curr = 1;
    while(true) {
        yield curr;
        [prev, curr] = [curr, prev + curr]
    }
}

const fibonacciIterator = generateFibonacci()
for(let i = 0; i < 10; i++) {
    console.log(fibonacciIterator.next().value)
}

function fetchData(url) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Data from ${url}`), 1000)
    })
}

function* fetchMultipleData() {
    const data1 = yield fetchData('https://api.example.com/data1');
    const data2 = yield fetchData('https://api.example.com/data2');
    const data3 = yield fetchData('https://api.example.com/data3');

    return [data1, data2, data3]
}

const dataGenerator = fetchMultipleData()
dataGenerator.next().value
    .then(result => dataGenerator.next(result).value)
    .then(result => dataGenerator.next(result).value)
    .then(result => dataGenerator.next(result).value)
    .then(result => console.log(result))

    
      
void async function generate() {
    async function* foo() {
        yield await fetchData('a');
        yield await Promise.resolve('b');
        yield await fetchData('c');
    }
    let str = ''
    return (async () => {
        for await (const val of foo()) {
            str = str + val;
        }
        console.log(str);
    })()
}()
    
      