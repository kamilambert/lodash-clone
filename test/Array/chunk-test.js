let expect = require ('chai').expect
let chunk = require ('../../src/Array/chunk')

describe('chunk()', () => {
  it('Gets the index at which the first occurrence of value is found in array', () => {
    expect(chunk([1, 2, 3, 4, 5], 3)).to.deep.equal([[1, 2, 3], [4, 5]])
    expect(chunk(['1', '2', '3', '4', '5'], 2)).to.deep.equal([['1', '2'], ['3', '4', '5']])
    expect(chunk(['1', '2', '3', '4', '5'], 0)).to.deep.equal('error')
  })
})
