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
    expect(bst.search(3).data).to.equal(3)
  })

  it('returns a node object or null if not found', () => {
    expect(bst.search(3)).to.be.a('TreeNode')
  })

  it('returns a node object or null if not found', () => {
    expect(bst.search(100)).to.equal(null)
  })

  it("removes an value's node (if exists) from the tree", () => {
    bst.remove(3)
    expect(bst.search(3)).to.equal(null)
  })

  it("traverse the tree using in-order traversal and apply function on each node's value", () => {
    expect(bst.traverse((val) => console.log(val))).to.equal(3)
  })

  it('return the number of nodes in the tree', () => {
    expect(bst.count()).to.equal(3)
  })

})
