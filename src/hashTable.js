'use strict'

export default class HashTable {
  // your code here
}

// Have to iterate through the LinkedList
// Bucket needs to find, delegate to the LinkedList find
// Hash table just figures out what is the hash bucket number, passes the same thing down to LinkedList

class Node {
  constructor(key,value) {
    this.key = key
    this.value = value
    this.next = null
  }
}

class LinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this._length = 0
  }

  insert(key, value) {
    let node = new Node(key, value)
    if (this.head === null) { this.head = node }
    if (this.tail !== null) { this.tail.next = node }
    this.tail = node
    this._length++
  }

  removeAt(index) {
   var prev = null;
   var node = this.head;
   var i = 0;
   while (node != null && i++ < index) {
     prev = node;
     node = node.next;
   }
   if (prev == null) { this.head = node.next;}
   else { prev.next = node.next; }
  }

  find(key) {
    let currentNode = this.head
    let position = 0
    while (currentNode !== null) {
      if(currentNode.key === key) {
        return position
      }
      currentNode = currentNode.next
      position++
    }
    return -1
  }

  getValue(position) {
    let currentNode = this.head
    for (let i = 0; i <= position; i++ ) {
      currentNode = currentNode.next
    }
    return currentNode.value
  }
}

class Bucket() {
  this._storage = new LinkedList()

  add(key, value){
    this._storage.insert([key, value])
    this._storage._length++
    return this._storage
  }

  find(key){
    simpleHash(key, int)
    if (this.hasItem(key)) {
      // return location
    } else {
      return undefined;
    }
  }

  setHash(key){

  }

  getHash(key){
    let position = this.find(key)
    if(position !== -1) {
      this._storage.getValue(position)
    }
    return undefined
  }

  replace(value, position) {
    this._storage[position][1] = value
  }
}

function simpleHash(key, tableSize) {

}

function hashTable(tableSize) {
  this._size = tableSize
  this._storage = {}

}

class HashTable(tableSize) {
  constructor() {
    this._size = 0;
    this._buckets = new Array(size);  // or new Bucket
    for(var i = 0; i < size; ++i) {
      this._buckets[i] = new LinkedList();
    }
  }

  add(value) {
    let index = this.hash(value)
    this._buckets[index].add(value)
  }

  hash(value){
    let sum = 0;
      for (var i = 0; i < value.length; ++i) {
        sum += value[i].charCodeAt() - 97;
      }
      return sum % this._size;
  }

  findBucket(key){
    let bucketNumber = hash(key)
    return this._buckets[bucketNumber]
  }
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      this.items[key] = obj[key];
      this.size++;
    }
  }
}


HashTable.prototype.put = function(key, value) {
  var previous = undefined;
  if (this.hasItem(key)) {
      previous = this.items[key];
  }
  else {
      this.size++;
  }
  this.items[key] = value;
  return previous;
}

HashTable.prototype.get = function (key) {
  return this.hasItem(key) ? this.items[key] : undefined;
}

HashTable.prototype.contains = function (key) {
  // return this.items.hasOwnProperty(key);
  return this.hasItem(key)
}

HashTable.prototype.remove = function () {
  if (this.hasItem(key)) {
  previous = this.items[key];
  this.size--;
  delete this.items[key];
  return previous;
  }
  else {
      return undefined;
  }
}

HashTable.prototype.iterate = function (cb) {
  for (var key in this.items) {
    if (this.hasItem(key)) {
        fn(key, this.items[key]);
    }
  }
}

HashTable.prototype.hash = function (key) {
  if (this.hasItem(key)) {
    var hash = 0, strlen = this.items[key].length, i, c;
    if ( strlen === 0 ) {
      return hash
    }
    for ( i = 0; i < strlen; i++ ) {
      c = s.charCodeAt( i );
      hash = ((hash << 5) – hash) + c;
      hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
  } else {
    return undefined;
  }
}

HashTable.prototype.clear = function() {
  this.items = {}
  this.length = 0;
}

HashTable.prototype.values = function() {
  var values = [];
  for (var k in this.items) {
    if (this.hasItem(k)) {
      values.push(this.items[k]);
    }
  }
  return values;
}
