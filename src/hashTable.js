'use strict'

export default class HashTable {
  // your code here
}

// Have to iterate through the LinkedList
// Bucket needs to find, delegate to the LinkedList find
// Hash table just figures out what is the hash bucket number, passes the same thing down to LinkedList

class Bucket() {
  constructor() {
    this._storage = new LinkedList()
  }

  add(key, value){
    this._storage.insert(key, value)
    this._storage._length++
    return this._storage
  }

  find(key){
    //return this._storage.find(key)
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
    this._size = tableSize;
    this._buckets = [];
    for(var i = 0; i < tableSize; ++i) {
      this._buckets[i] = new LinkedList();
    }
  }

  hash(value){
    let sum = 0;
    for (var i = 0; i < value.length; ++i) {
      sum += value[i].charCodeAt() - 97;
    }
    return sum % this._size;
  }

  hash2(key) {
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

  add(key, value) {
    let index = this.hash(value)
    this._buckets[index].add(value)
    // this._size++
  }

  findBucket(key){
    let bucketNumber = hash(key)
    return this._buckets[bucketNumber]
  }

  get(key) {
    return this.hasItem(key) ? this.items[key] : undefined;
  }

  contains(key) {
    // return this.items.hasOwnProperty(key);
    return this.hasItem(key)
  }

  clear() {
    this.items = {}
    this.length = 0;
  }

  values() {
    var values = [];
    for (var k in this.items) {
      if (this.hasItem(k)) {
        values.push(this.items[k]);
      }
    }
    return values;
  }

  iterate(cb) {
    for (var key in this.items) {
      if (this.hasItem(key)) {
          fn(key, this.items[key]);
      }
    }
  }

  remove() {
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
}
