import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/binaryTree'

chai.use(chaiChange)

describe('Binary Tree', () => {
  'use strict'

  it('exists', () => {
    expect(binaryTree).to.be.a('function')
  })
  const bst = new BinarySearchTree()

  context('insert()', () => {
    it('inserts a node with the specified value into the tree', () => {
      bst.insert(3)

      // expect(() => myStack.push('foo'))
      //   .to.alter(() => myStack.length(), { from: 0, to: 1 })
    })
  })
})

const bst = new BinarySearchTree()
bst.insert(3)  // inserts a node with the specified value into the tree.
bst.search(3)  // returns a node object or null if not found.
bst.remove(3)  // removes an value's node (if exists) from the tree.
bst.traverse((val) => console.log(val)) // traverse the tree using in-order traversal and apply function on each node's value.
bst.count()    // return the number of nodes in the tree.
