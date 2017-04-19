let expect = require ('chai').expect
let chunk = require ('../../src/Array/chunk')

describe('chunk()', () => {
  it('Creates an array of elements split into groups of length size. If array cannot be split evenly, the final chunk will be the remaining elements.', () => {
    expect(chunk([1, 2, 3, 4, 5], 3)).to.deep.equal([[1, 2, 3], [4, 5]])
    expect(chunk(['1', '2', '3', '4', '5'], 2)).to.deep.equal([['1', '2'], ['3', '4', '5']])
    expect(chunk(['1', '2', '3', '4', '5'], 0)).to.deep.equal('error')
  })
})
