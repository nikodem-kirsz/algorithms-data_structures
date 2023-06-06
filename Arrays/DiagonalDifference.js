const diagonalDifference = arr => {
    let firstDiagonal = 0
    let secondDiagonal = 0
    for (let i = 0, j = 0, k = arr.length - 1; i < arr.length; i++, j++, k--) {
        firstDiagonal += arr[i][j]
        secondDiagonal += arr[i][k]
    }
    return Math.abs(firstDiagonal - secondDiagonal)
}

// console.log(diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]))


const countingSort = arr => {
    let frequencyList = new Array(21).fill(0)
    for (let i = 0; i < arr.length; i++) {
        frequencyList[arr[i]] ? frequencyList[arr[i]]++ : frequencyList[arr[i]] = 1 
    }
    for (let i = 1; i < frequencyList.length; i++) {
            frequencyList[i] = frequencyList[i] + frequencyList[i-1]
    }

    let resultArray = []
    for (let i = 0; i < arr.length; i++) {
        if (frequencyList[arr[i]] > 0) {
            resultArray[frequencyList[arr[i]]] = arr[i]
        }
        frequencyList[arr[i]]--
    }
    resultArray.shift()
    return resultArray
}

console.log(countingSort([1,4,1,2,7,5,2]))