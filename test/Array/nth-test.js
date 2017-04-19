let expect = require ('chai').expect
let nth = require ('../../src/Array/nth')

describe('nth()', () => {
  it('Gets the element at index n of array. If n is negative, the nth element from the end is returned.', () => {
    expect(nth(['a', 'b', 'c', 'd'], 1)).to.deep.equal('b')
    expect(nth(['a', 'b', 'c', 'd'], -2)).to.deep.equal('c')
    expect(nth([])).to.deep.equal(undefined)
  })
})
