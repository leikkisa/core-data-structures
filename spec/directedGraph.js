import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/directedGraph'

chai.use(chaiChange)

describe('Directed Graph', () => {
  'use strict'

  it('exists', () => {
    expect(DirectedGraph).to.be.a('function')
  })

  const diGraph = new DirectedGraph()

  it('adds a vertex to the graph', () => {
    diGraph.addVertex('v1')

    expect(() => myStack.push('foo'))
      .to.alter(() => myStack.length(), { from: 0, to: 1 })
  })

  it('returns true if the graph contains the vertex or false if not', () => {
    diGraph.addVertex('v1')

    expect(() => myStack.push('foo'))
      .to.alter(() => myStack.length(), { from: 0, to: 1 })
  })

  it('adds a direction from 'v1' to 'v2'', () => {
    diGraph.addVertex('v1')

    expect(() => myStack.push('foo'))
      .to.alter(() => myStack.length(), { from: 0, to: 1 })
  })

  it('adds a vertex to the graph', () => {
    diGraph.addVertex('v1')

    expect(() => myStack.push('foo'))
      .to.alter(() => myStack.length(), { from: 0, to: 1 })
  })

  it('adds a vertex to the graph', () => {
    diGraph.addVertex('v1')

    expect(() => myStack.push('foo'))
      .to.alter(() => myStack.length(), { from: 0, to: 1 })
  })

  it('adds a vertex to the graph', () => {
    diGraph.addVertex('v1')

    expect(() => myStack.push('foo'))
      .to.alter(() => myStack.length(), { from: 0, to: 1 })
  })

  it('adds a vertex to the graph', () => {
    diGraph.addVertex('v1')

    expect(() => myStack.push('foo'))
      .to.alter(() => myStack.length(), { from: 0, to: 1 })
  })

  it('adds a vertex to the graph', () => {
    diGraph.addVertex('v1')

    expect(() => myStack.push('foo'))
      .to.alter(() => myStack.length(), { from: 0, to: 1 })
  })

  it('adds a vertex to the graph', () => {
    diGraph.addVertex('v1')

    expect(() => myStack.push('foo'))
      .to.alter(() => myStack.length(), { from: 0, to: 1 })
  })

  it('adds a vertex to the graph', () => {
    diGraph.addVertex('v1')

    expect(() => myStack.push('foo'))
      .to.alter(() => myStack.length(), { from: 0, to: 1 })
  })
})

diGraph.addVertex('v1')               // adds a vertex to the graph.
diGraph.hasVertex('v1')               // returns true if the graph contains the vertex or false if not.
diGraph.addDirection('v1', 'v2')      // adds a direction from 'v1' to 'v2'.
diGraph.hasDirection('v1', 'v2')      // returns true if there's a direction from 'v1' to 'v2'.
diGraph.visit('v1', vertex => console.log(vertex)) // visit all the connected vertices in the graph starting with v1 and apply function on the reached vertex.
diGraph.findPaths('v1', 'v2')         // returns an array of all the paths between two vertices.
diGraph.removeDirection('v1', 'v2')   // removes an existing direction between 'v1' and 'v2'.
diGraph.getSeparatedVertices()        // returns an array of all the vertices that are unconnected to the graph (have no direction linking them to another vertex).
diGraph.removeVertex('v1')            // removes an existing vertex and all its directions (the incoming and outgoing).
diGraph.count()                       // returns the number of vertices in the graph.
