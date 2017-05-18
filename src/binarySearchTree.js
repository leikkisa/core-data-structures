'use strict'

export default class BinarySearchTree {
  constructor(){

  }

  insert(value) {

  }

  search(value) {

  }

  remove(value){

  }

  traverse(cb){

  }

  count(){

  }
}

bst.insert(3)  // inserts a node with the specified value into the tree.
bst.search(3)  // returns a node object or null if not found.
bst.remove(3)  // removes an value's node (if exists) from the tree.
bst.traverse((val) => console.log(val)) // traverse the tree using in-order traversal and apply function on each node's value.
bst.count()    // return the number of nodes in the tree.
