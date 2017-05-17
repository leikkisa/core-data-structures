import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/stack'

chai.use(chaiChange)

describe('Binary Tree', () => {
  'use strict'

  it('exists', () => {
    expect(Binary Tree).to.be.a('function')
  })

  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      const myStack = new Stack()

      expect(() => myStack.push('foo'))
        .to.alter(() => myStack.length(), { from: 0, to: 1 })
    })
  })
})

const bst = new BinarySearchTree()
bst.insert(3)  // inserts a node with the specified value into the tree.
bst.search(3)  // returns a node object or null if not found.
bst.remove(3)  // removes an value's node (if exists) from the tree.
bst.traverse((val) => console.log(val)) // traverse the tree using in-order traversal and apply function on each node's value.
bst.count()    // return the number of nodes in the tree.

const leastNode = new TreeNode({data: 3})
const moreNode = new TreeNode({data: 10})
const midNode = new TreeNode({data: 7, left: leastNode, right: moreNode})

midNode.getData()           // returns the node's data
midNode.getLeft()           // returns the left node or null if none
midNode.setLeft(leastNode)  // changes the reference to the left node and returns the original node
midNode.getRight()          // returns the right node or null if none
midNode.setRight(moreNode)  // changes the reference to the right node and returns the original node
