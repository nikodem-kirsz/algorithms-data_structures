var items = [5,3,7,6,2,9];

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    const pivot = arr[arr.length - 1]
    let leftHalf = []
    let rightHalf = []
    for (let i=0; i<arr.length-1; i++) {
        if (arr[i] < pivot) {
            leftHalf.push(arr[i])
        } else {
            rightHalf.push(arr[i])
        }
    }

    return [...quickSort(leftHalf), pivot, ...quickSort(rightHalf)]
}

console.log(quickSort(items))

function efficientQuickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivot = medianOfFree(arr, left, right)
        const partitionIndex = partition(arr, left, right, pivot)

        efficientQuickSort(arr, left, partitionIndex - 1)
        efficientQuickSort(arr, partitionIndex + 1, right)
    }
    
    return arr
}

function partition(arr, left, right, pivot) {
    while(left <= right) {
        while (arr[left] < pivot) {
            left++
        }
        while (arr[right] > pivot) {
            right--
        }
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    return left
}

function medianOfFree(arr, left, right) {
    const mid = Math.floor(arr.length / 2)

    if (arr[left] > arr[mid]) {
       [arr[left], arr[mid]] = [arr[mid], arr[left]] 
    }
    if (arr[right] < arr[mid]) {
       [arr[right], arr[mid]] = [arr[mid], arr[right]]
    }
    if (arr[left] < arr[mid]) {
       [arr[left], arr[mid]] = [arr[mid], arr[left]]
    }
    return arr[mid]
}

console.log('Efficient quickSort using median of three elements: ', efficientQuickSort(items))