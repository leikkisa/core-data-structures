'use strict'
import Node from '../src/node'
export default class LinkedList {
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
   let currentNode = this.head;
   const message = 'Non-existent node'

   if (index < 0 || index > this._length) {
     throw new Error(message.failure)
   }

   if (index === 0) {
     this._length--
     if (this._length > 0) {this.head = currentNode.next}
     deletedNode = currentNode
     currentNode = null
     return deletedNode
   }

   let count = 0
   while (count < index) {
     beforeNodeToDelete = currentNode
     currentNode = currentNode.next
     nodeToDelete = currentNode.next
     count++
   }
   if (index !== this._length) {
     beforeNodeToDelete.next = nodeToDelete.next
   }
   deletedNode = nodeToDelete
   nodeToDelete = null
   this._length--
   return deletedNode
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

  getValue(key) {
    let position = this.find(key)
    let currentNode = this.head
    for (let i = 0; i <= position; i++ ) {
      currentNode = currentNode.next
    }
    return currentNode.value
  }
}
