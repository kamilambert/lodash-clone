let expect = require ('chai').expect
let reverse = require ('../../src/Array/reverse')

describe('reverse()', () => {
  it('Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on.', () => {
    expect(reverse(['a', 'b', 'c'])).to.deep.equal(['c', 'b', 'a'])
    expect(reverse([1, 2, 3, 4, 5])).to.deep.equal([5, 4, 3, 2, 1])
    expect(reverse([])).to.deep.equal(undefined)
  })
})
