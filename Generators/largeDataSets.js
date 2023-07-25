function* chunkedData(data, chunkSize) {
    if (data.length < chunkSize) return data
    for(let i = 0; i < data.length; i+=chunkSize) {
        yield data.slice(i, i + chunkSize);
    }
}

const data = Array.from({length: 100000}, (_, index) => index + 1)
const chunkIterator = chunkedData(data, 1000)

for(let chunk of chunkIterator) {
    console.log(chunk) // Do something with data chunks
}