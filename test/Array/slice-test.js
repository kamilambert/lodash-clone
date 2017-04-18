let expect = require ('chai').expect
let _slice = require ('../src/Array/slice')

describe('_slice()', () => {
  it('Creates a slice of array from start up to but now including end', () => {
    expect(_slice(['1', '2', '3', '4', '5'], 1, 3)).to.deep.equal(['2','3'])
    expect(_slice([1, 2, 3, 4, 5], 1, 3)).to.deep.equal([2, 3])
    expect(_slice([1, '2', [3], 4, 5], 1, 3)).to.deep.equal(['2', [3]])
  })
})
