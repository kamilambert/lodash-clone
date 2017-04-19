let expect = require ('chai').expect
let tail = require ('../../src/Array/tail')

describe('tail()', () => {
  it('Gets all but the first element of array.', () => {
    expect(tail([1, 2, 3])).to.deep.equal([2, 3])
    expect(tail(['1', '2', '3'])).to.deep.equal(['2', '3'])
    expect(tail([])).to.deep.equal(undefined)
  })
})
