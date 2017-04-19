let expect = require ('chai').expect
let pullAll = require ('../../src/Array/pullAll')

describe('pullAll()', () => {
  it('Removes all given values from array', () => {
    expect(pullAll(['a', 'b', 'c', 'a', 'b', 'c'], ['a', 'c'])).to.deep.equal(['b', 'b'])
    expect(pullAll(['a', 'b', 'c', 'a', 'b', 'c'], ['b', 'c'])).to.deep.equal(['a', 'a'])
    expect(pullAll(['a', 'b', 'c', 'a', 'b', 'c'], ['a', 'b'])).to.deep.equal(['c', 'c'])
  })
})
