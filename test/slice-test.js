let expect = require ('chai').expect
let slice = require ('../src/slice')

describe('slice()', () => {
  it('Creates a slice of array from start up to but now including end', () => {
    expect(slice(['1', '2', '3', '4', '5'], 1, 3)).to.deep.equal(['2','3'])
    expect(slice([1, 2, 3, 4, 5], 1, 3)).to.deep.equal([2, 3])
    expect(slice([1, '2', [3], 4, 5], 1, 3)).to.deep.equal(['2', [3]])
  })
})
