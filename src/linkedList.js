'use strict'
import Node from '../src/node'
export default class LinkedList {
  constructor(){
    this._head = null
    this._tail = null
    this._length = 0
  }

  insert(key, value) {
    let node = new Node(key, value)
    if (this._head === null) { this._head = node }
    if (this._tail !== null) { this._tail._next = node }
    this._tail = node
    this._length++
  }

  remove(index) {
    let currentNode = this._head
    let beforeNodeToRemove
    let nodeToRemove
    let removedNode

    if (index < 0 || index > this._length) {
      throw new Error('Non-existent node')
    }

    if (index === 0) {
      this._length--
      if (this._length > 0) {this._head = currentNode._next}
      removedNode = currentNode
      currentNode = null
      return removedNode
    }



    let count = 0
    while (count < index) {
      beforeNodeToRemove = currentNode
      currentNode = currentNode._next
      nodeToRemove = currentNode._next
      count++
    }
   if (index !== this._length) {
     beforeNodeToRemove._next = nodeToRemove._next
   }
    removedNode = nodeToRemove
    nodeToRemove = null
    this._length--
    return removedNode
  }

  find(key) {
    let currentNode = this._head
    let position = 0
    while (currentNode !== null) {
      if(currentNode.key === key) {
        return position
      }
      currentNode = currentNode._next
      position++
    }
    return -1
  }

  getValue(key) {
    let position = this.find(key)
    let currentNode = this._head
    for (let i = 0; i <= position; i++ ) {
      currentNode = currentNode._next
    }
    return currentNode.value
  }
}
