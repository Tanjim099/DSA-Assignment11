/*
 A circular queue is a queue with a fixed size, where the front and rear elements are connected in a circular manner.
 The advantage of using a circular queue is that it allows us to reuse the empty spaces that are created after dequeuing elements.
*/

//Here's the implementation in JavaScript:
class CircularQueue {
    constructor(k) {
        this.queue = new Array(k);
        this.front = -1; // Index of the front element
        this.rear = -1;  // Index of the rear element
        this.size = k;   // Max size of the circular queue
    }

    enQueue(value) {
        // Check if the queue is full
        if (this.isFull()) {
            return false; // Unable to enqueue if the queue is full
        }

        // Calculate the new rear index after enqueuing
        this.rear = (this.rear + 1) % this.size;

        // Add the new element to the queue
        this.queue[this.rear] = value;

        // If this is the first element, set the front index to 0
        if (this.front === -1) {
            this.front = this.rear;
        }

        return true; // Enqueue successful
    }

    deQueue() {
        // Check if the queue is empty
        if (this.isEmpty()) {
            return false; // Unable to dequeue if the queue is empty
        }

        // Remove the front element from the queue
        delete this.queue[this.front];

        // Move the front index to the next element
        this.front = (this.front + 1) % this.size;

        // If there are no elements left, reset front and rear to -1
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        }

        return true; // Dequeue successful
    }

    Front() {
        // Check if the queue is empty
        if (this.isEmpty()) {
            return -1;
        }

        return this.queue[this.front];
    }

    Rear() {
        // Check if the queue is empty
        if (this.isEmpty()) {
            return -1;
        }

        return this.queue[this.rear];
    }

    isEmpty() {
        return this.front === -1;
    }

    isFull() {
        // Check if the next index after the rear is equal to the front
        return (this.rear + 1) % this.size === this.front;
    }
}

//Usage Example:

const circularQueue = new CircularQueue(5);

console.log(circularQueue.enQueue(1)); // true
console.log(circularQueue.enQueue(2)); // true
console.log(circularQueue.enQueue(3)); // true
console.log(circularQueue.Front());    // 1
console.log(circularQueue.Rear());     // 3
console.log(circularQueue.isEmpty());  // false
console.log(circularQueue.isFull());   // false
console.log(circularQueue.deQueue());  // true
console.log(circularQueue.enQueue(4)); // true
console.log(circularQueue.enQueue(5)); // true
console.log(circularQueue.isFull());   // true
console.log(circularQueue.enQueue(6)); // false (Queue is full)
