let expect = require ('chai').expect
let _indexOf = require ('../../src/Array/indexOf')

describe('_indexOf()', () => {
  it('Gets the index at which the first occurrence of value is found in array', () => {
    expect(_indexOf([1, 2, 3, 4, 5], 5)).to.deep.equal(4)
    expect(_indexOf(['1', '2', '3', '4', '5'], '5')).to.deep.equal(4)
    expect(_indexOf([1, 2, 3, 4, 5], 7)).to.deep.equal(-1)
    expect(_indexOf([1, 2, 3, 4, 5], -3)).to.deep.equal(-1)
    expect(_indexOf([1, 2, 3, 4, 5], '3')).to.deep.equal(-1)
  })
})
