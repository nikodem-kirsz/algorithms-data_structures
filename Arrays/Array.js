class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }
    get(index) { // O(1)
        return this.data[index]
    }
    push(item) { // pushes item to the end O(1)
        this.data[this.length] = item
        this.length++
        return this.data
    }
    unshift(item) {
        let newData = {0: item}
        for(let i=0; i<this.length; i++) { // O(n)
            newData[i + 1] = this.data[i]
        }
        this.data = newData
        this.length++
        return this.data
    }
    pop() { // takes out the last element O(1)
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }
    deleteAtIndex(index) { // O(n)
        const item = this.data[index]
        this.shiftItems(index)
        return item
    }
    shiftItems(index) {
        for(let i=index; i<this.length - 1; i++) {
            this.data[index] = this.data[index + 1]
        }
        delete this.data[this.length-1]
        this.length--
    }
}

let myArray = new MyArray()
myArray.push(10)
myArray.push(3)
myArray.push(5)
myArray.push(8)
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.deleteAtIndex(1)
console.log(myArray)
myArray.unshift(100)
console.log(myArray)