let expect = require ('chai').expect
let pullAt = require ('../../src/Array/pullAt')

describe('pullAt()', () => {
  it('Gets the index at which the first occurrence of value is found in array', () => {
    expect(pullAt(['a', 'b', 'c', 'd'], [1, 3])).to.deep.equal(['b', 'd'])
    expect(pullAt(['a', 'b', 'c', 'd'], [0])).to.deep.equal(['a'])
    expect(pullAt([])).to.deep.equal(undefined)
  })
})
