'use strict'

export default class TreeNode {
  constructor(node){
    this.data = node.data
    this.left = node.left || null
    this.right = node.right || null
  }

  getData() {
    return this.data
  }

  getLeft(){
    return this.left
  }

  setLeft(node){
    this.left = node
    return this
  }

  getRight(){
    return this.right
  }

  setRight(node){
    this.right = node
    return this
  }

}
