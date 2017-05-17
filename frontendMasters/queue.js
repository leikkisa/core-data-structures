/*
QUEUE
Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.
*** Operations:
myQueue.enqueue(value)
=> count of queue
add value to collection
myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection
myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection
myQueue.count()
=> number of elements in queue
*** Additional Exercises:
Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."
Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?
Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?
 */

function Queue(capacity) {
  this._capacity = capacity || Infinity
  this._storage = {}
  this._head = 0
  this._tail = 0
}

Queue.prototype.enqueue = function(value) {
  if(this._size + 1 < this._capacity){
    this._storage[this._tail++] = value;
    return this.count();
  }
  return "Maximum capacity reached"
};
// Time complexity:

Queue.prototype.dequeue = function() {
  if (this._head > 0) {
    result = this._storage[this._head]
    delete this._storage[this._head]
    if (this._head < this._tail) this._head++
    return result
  }
  return "No more items in queue"
};
// Time complexity:

Queue.prototype.peek = function() {
  return this._storage[this._head]
};

Queue.prototype.count = function() {
  return this._tail - this._head
};
// Time complexity:



/*
*** Exercises:
1. Implement a queue using two stacks.
2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.
3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.
 */

 function Queue_TwoStacks() {
  this._stackIn = new Stack();
  this._stackOut = new Stack();
}

Queue_TwoStacks.prototype.enqueue = function(val) {
  this._stackIn.push(val);
};

Queue_TwoStacks.prototype._transferStacks = function() {
  while (this._stackIn.count() > 0) {
    this._stackOut.push(this._stackIn.pop());
  }
};

Queue_TwoStacks.prototype.dequeue = function() {
  if (this._stackOut.count() === 0) this._transferStacks();
  return this._stackOut.pop();
};

Queue_TwoStacks.prototype.count = function() {
  return this._stackIn.count() + this._stackOut.count();
};

Queue_TwoStacks.prototype.peek = function() {
  if (this._stackOut.count() === 0) this._transferStacks();
  return this._stackOut.peek();
};

// var myQueue_TwoStacks = new Queue(3);
// console.log(myQueue_TwoStacks.enqueue('a'), 'should be 1');
// console.log(myQueue_TwoStacks.enqueue('b'), 'should be 2');
// console.log(myQueue_TwoStacks.enqueue('c'), 'should be 3');
// console.log(myQueue_TwoStacks.enqueue('d'), 'should be Max capacity reached');
// console.log(myQueue_TwoStacks.dequeue(), 'should be a');
// console.log(myQueue_TwoStacks.count(), 'should be 2');
// console.log(myQueue_TwoStacks.peek(), 'should be b');
// console.log(myQueue_TwoStacks.count(), 'should be 2');
