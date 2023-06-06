const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function altInsertionSort(array) {
  for(i=0; i<array.length; i++) { // O(n)
    for(j=0; j<i; j++) { // O(n)
        if (array[i] > array[j]) {
            let temp = array[j]
            array[j] = array[i]
            array[i] = temp
        }
    }
  }
}
        
function insertionSort(array) {
  const length = array.length;
	for (let i = 0; i < length; i++) { // O(n)
	    if (array[i] < array[0]) {
            //move number to the first position
            array.unshift(array.splice(i,1)[0]);
        } else {
            // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
            if (array[i] < array[i-1]) {
                //find where number should go
                for (var j = 1; j < i; j++) { // O(n)
                    if (array[i] < array[j]) {
                        //move number to the right spot
                        array.splice(j,0,array.splice(i,1)[0]);
                    }
                }
            }
        }
	}
}


insertionSort(numbers);
console.log(numbers);