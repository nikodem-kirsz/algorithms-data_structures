const numbers = [2,8,5,3,9,4,1,7];

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  const middle = Math.floor(arr.length / 2)
  const leftHalf = arr.slice(0, middle)
  const rightHalf = arr.slice(middle)

  const sortedLeftHalf = mergeSort(leftHalf)
  const sortedRightHalf = mergeSort(rightHalf)

  return merge(sortedLeftHalf, sortedRightHalf)
}


// [4,3,10] [1,2,5]
function merge(leftHalf, rightHalf) {
  let result = []
  let leftIndex = 0
  let rightIndex = 0
  while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
    if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
      result. push(leftHalf[leftIndex])
      leftIndex++
    } else {
      result.push(rightHalf[rightIndex])
      rightIndex++
    }
  }

  // [1,2,3,4,5,10]
  return result.concat(leftHalf.slice(leftIndex)).concat(rightHalf.slice(rightIndex))
}

const answer = mergeSort(numbers);
console.log(answer);