'use strict'

export default class Stack {
  constructor(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._count = 0;
  }

  push(value) {
    if(this._count < this._capacity) {
      this._storage[this._count++] = value;
      return this._count;
    }
    return 'Max capacity already reached. Remove element before adding a new one.';
  };

  pop() {
    if(this._count > 0) {
      result = this._storage[--this._count]
      delete this._storage[this._count]
      return result
    }
    return 'There is nothing else left in your stack!'
  }

  peek() {
    return this._storage[this._count - 1]
  };

  count() {
    return this._count
  };
}
