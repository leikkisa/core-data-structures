import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Stack from '../src/hashTable'

chai.use(chaiChange)

describe('Hash Table', () => {
  'use strict'

  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  const ht = new HashTable()

  context('push()', () => {
    it('pushes an element to the top of the stack.', () => {
      const myStack = new Stack()

      expect(() => myStack.push('foo'))
        .to.alter(() => myStack.length(), { from: 0, to: 1 })
    })
  })
})

ht.put("name", "Zanzibar")  // adds a key-value pair to the hash table, deal with collisions using chaining
ht.get("name")              // returns the data associated with key.
ht.contains("name")         // returns true if the hash table contains the key.
ht.iterate((k, v) => console.log(`${k}: ${v}`)) // takes a callback function and passes it each key and value in sequence.
ht.remove("name")           // removes a key-value pair by key.
ht.size()                   // returns the number of key-value pairs in the hash table.
HashTable.hash("name")      // generates a hash for the key "name"
