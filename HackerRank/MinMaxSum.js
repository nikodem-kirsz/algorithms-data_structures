// arr = [1,3,5,7,9]


// [7 69 2 221 8974]

function miniMaxSum(arr) {
    // Write your code here
    for (let i=0; i<arr.length; i++) { // O(n)
        if (arr[i] < arr[0]) {
            arr.unshift(arr.splice(i,1)[0])  
        } else {
            if (arr[i] < arr[i-1]) { // O(n)
                for (let j=1; j<i; j++) {
                    if (arr[i] < arr[j]) {
                        arr.splice(j,0,arr.splice(i,1)[0]) 
                        // inserts at index j element from index i removing it from postiion i
                    }
                }
            }
        }
    }
    let min = 0
    let max = 0
    for (let i=0; i<arr.length-1; i++) {
        min+=arr[i]
    }
    for (let i=arr.length-1; i>0; i--) {
        max+=arr[i]
    }
    return [min, max]
}

// console.log(miniMaxSum([7,69,2,221,8974]))

// '12:01:10PM' '12:00:00AM'
function timeConversion(s) {
    // Write your code here
    let dayTime = s.slice(s.length-2) // O(s) -> O(10)
    let hour = s.slice(0,2) // O(s) -> O(10)
    if (dayTime === 'PM') {
        s = s.replace('PM', '') // O(s) -> O(10)
        if (hour === '12') {
            return s
        }
        return s.replace(hour, parseInt(hour) + 12) // O(s) -> O(10)
    } else if (dayTime === 'AM') {
        s = s.replace('AM', '') // O(s) -> O(10)
        if (hour === '12') {
            return s.replace(hour, '00') // O(s) -> O(10)
        }
    }
    return s // O(s) -> O(10)
}


// console.log(timeConversion('12:01:10PM'))
console.log(timeConversion('12:01:10AM'))
