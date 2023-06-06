class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    append(value) { // O(1)
        this.length++;
        const node = new Node(value)
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node
        return this;
    }

    prepend(value) { // O(1)
        this.length++;
        const node = new Node(value);
        node.next = this.head
        this.head.prev = node;
        this.head = node;
        return this;
    }

    printList() { // O(n)
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return console.log(array);
    }

    insert(index, value) { // O(n)
        if (index >= this.length) {
            return this.append(value)
        }
        const newNode = new Node(value)
        const leader = this.lookup(index-1)
        const follower = leader.next;
        leader.next = newNode;
        newNode.next = follower;
        newNode.prev = leader;
        follower.prev = newNode;
        this.length++;
        return this;
    }

    lookup(index) { // O(n)
        if (index < 0 || index > this.length) {
            return null
        }
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next
            counter++;
        }
        return currentNode
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return
        }
        const leader = this.lookup(index-1); // O(n)
        const subsequentNode = leader.next // O(n)
        const follower = subsequentNode.next
        leader.next = follower;
        follower.prev = leader;
        this.length--;
        return this;
    }

    // [1,2,3,4,5]
    reverse() {
        if (!this.head.next) {
            return this.head
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null
        this.head = first
        
        return this.printList()
    }
}

const mylinkedlist = new LinkedList(10)
mylinkedlist.append(5)
mylinkedlist.append(15)

mylinkedlist.prepend(8)

mylinkedlist.insert(2, 100)
mylinkedlist.insert(2, 99)

mylinkedlist.remove(2)
mylinkedlist.remove(2)

mylinkedlist.printList()
mylinkedlist.reverse()
