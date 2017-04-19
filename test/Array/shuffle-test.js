let expect = require ('chai').expect
let shuffle = require ('../../src/Array/shuffle')

describe('shuffle()', () => {
  it('Creates an array of shuffled values', () => {
    expect(shuffle(['a', 'b', 'c', 'a', 'b', 'c'])).to.deep.equal(6)
    expect(shuffle([1, 2, 3, 4])).to.deep.equal(4)
    expect(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9])).to.deep.equal(9)
  })
})
