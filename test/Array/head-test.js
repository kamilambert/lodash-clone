let expect = require ('chai').expect
let head = require ('../../src/Array/head')

describe('head()', () => {
  it('Gets the first element of array', () => {
    expect(head([1, 2, 3])).to.deep.equal(1)
    expect(head(['1', '2', '3'])).to.deep.equal('1')
    expect(head([])).to.deep.equal(undefined)
  })
})
