import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import TreeNode from '../src/treeNode'

chai.use(chaiChange)

describe('Tree Node', () => {
  'use strict'

  it('exists', () => {
    expect(TreeNode).to.be.a('function')
  })

  const leastNode = new TreeNode({data: 3})
  const moreNode = new TreeNode({data: 10})
  const midNode = new TreeNode({data: 7, left: leastNode, right: moreNode})

    it('getData()', () => {
      expect(midNode.getData()).to.equal(7)
    })

    it('getLeft()', () => { // returns the left node or null if none
      expect(midNode.getLeft()).to.equal(leastNode)
    })

    it('setLeft()', () => { // changes the reference to the left node and returns the original node
      expect(midNode.setLeft(moreNode)).to.equal(midNode)
    })

    it('new mid node after setLeft', () => { // changes the reference to the left node and returns the original node
      expect(midNode.getLeft()).to.equal(moreNode)
    })

    it('getRight()', () => { // returns the right node or null if none
      expect(midNode.getRight()).to.equal(moreNode)
    })

    it('setRight()', () => { // changes the reference to the left node and returns the original node
      expect(midNode.setRight(leastNode)).to.equal(midNode)
    })

    it('new mid node after setRight', () => { // changes the reference to the right node and returns the original node
      expect(midNode.getRight()).to.equal(leastNode)
    })

})
