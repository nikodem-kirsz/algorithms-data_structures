function insertionSort1(n, arr) {
    // Write your code here
    // [1,2,4,5,3]
    for (let i=arr.length - 2; i >= 0 ; i--) {
        if (arr[i] > arr[n-1]) {
            arr.push(arr.splice(i, 1)[0])
        } else {
            if (arr[i] > arr[i+1]) {
                for (let j=n-1; j>=i; j--) {
                    if (arr[i] > arr[j]) {
                        arr.splice(j, 0, arr.splice(i, 1)[0])
                    }
                }
            }
        }
    }
    return arr
}
console.log(insertionSort1(6, [1,21,2,4,5,3]))