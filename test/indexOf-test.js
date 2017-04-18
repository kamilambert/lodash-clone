let expect = require ('chai').expect
let indexOf = require ('../src/indexOf')

describe('indexOf()', () => {
  it('Gets the index at which the first occurrence of value is found in array', () => {
    expect(indexOf([1, 2, 3, 4, 5], 5)).to.deep.equal(4)
    expect(indexOf(['1', '2', '3', '4', '5'], '5')).to.deep.equal(4)
    expect(indexOf([1, 2, 3, 4, 5], 7)).to.deep.equal(-1)
    expect(indexOf([1, 2, 3, 4, 5], -3)).to.deep.equal(-1)
    expect(indexOf([1, 2, 3, 4, 5], '3')).to.deep.equal(-1)
  })
})
