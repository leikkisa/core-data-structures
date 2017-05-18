import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/binarySearchTree'

chai.use(chaiChange)

describe('Binary Search Tree', () => {
  'use strict'

  it('exists', () => {
    expect(BinarySearchTree).to.be.a('function')
  })
  const bst = new BinarySearchTree()

  it('inserts a node with the specified value into the tree', () => {
    bst.insert(3)
    expect(something.to.equal(3))
  })

  it('returns a node object or null if not found', () => {
    bst.search(3)
  })

  it("removes an value's node (if exists) from the tree", () => {
    bst.remove(3)
  })

  it("traverse the tree using in-order traversal and apply function on each node's value", () => {
    bst.traverse((val) => console.log(val))
  })

  it('return the number of nodes in the tree', () => {
    bst.count()
  })

})
