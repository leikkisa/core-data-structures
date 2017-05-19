'use strict'
import TreeNode from '../src/treeNode'

export default class BinarySearchTree {
  constructor(){
    this._root = null;
    this._size = 0;
  }

  insert(value) {
    let treeNode = new TreeNode()
    let currentNode
    treeNode.data = value
    this._size++

    if(this._root === null) {
      this._root = treeNode
    } else {
      currentNode = this._root
      }

    while(true) {
      if(currentNode.data > value) {
        if (currentNode.left === null) {
          currentNode.left = treeNode
          break
        } else {
          currentNode = currentNode.left
        }
      }

      if(currentNode.data < value) {
        if (currentNode.right === null) {
          currentNode.right = treeNode
          break
        } else {
          currentNode = currentNode.right
        }
      }
    }
  }

  search(value){
    if (this._root === null){
      throw new Error ('There are no nodes in this tree.')
    }
    let currentNode = this._root
    let found = false
    while (!found && currentNode) {
      if( value < currentNode.data ) {
        currentNode = currentNode.left
      } else if( value > currentNode.data ) {
        currentNode = currentNode.right
      } else {
        found = true
        return currentNode
      }
    }
    return null
  }

  remove(value){
    let found = false
    let parent = null
    let currentNode = this._root

    while(!found && currentNode){
      if (value < currentNode.data){
        parent = currentNode
        currentNode = currentNode.left
      } else if (value > currentNode.data){
        parent = currentNode
        currentNode = currentNode.right
      } else {
        found = true
      }
    }

    if (found){
      let leftDiff = Math.abs(currentNode.left.data - parent.data)
      let rightDiff = Math.abs(currentNode.right.data - parent.data)
      if (currentNode.left === null || rightDiff > leftDiff) {
        if (value < parent.data){
          parent.left = currentNode.right
        } else {
          parent.right = currentNode.right
        }
      } else {
        if (value > parent.data) {
          parent.right = currentNode.left
        } else {
          parent.left = currentNode.left
        }
      }
    }
    this._size--
  }

  traverse(cb){
    if (this._root === null){
      throw new Error ('There are no nodes in this tree.')
    }

    inOrder(node) {
      if(node){
        // Left subtree
        if (node.left !== null){
          inOrder(node.left)
        }
        // Callback
        cb(node.data)

        // Right subtree
        if(node.right !== null){
          inOrder(node.right)
        }
      }
    }

    inOrder(this._root)
  }

  count(){
    return this._size
  }
}
