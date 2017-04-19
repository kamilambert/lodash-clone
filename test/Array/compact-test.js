let expect = require ('chai').expect
let compact = require ('../../src/Array/compact')

describe('compact()', () => {
  it('Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.', () => {
    expect(compact([1, 2, false, 3, null])).to.deep.equal([1, 2, 3])
    expect(compact(['watch', 'belt', 0])).to.deep.equal(['watch', 'belt'])
    expect(compact([])).to.deep.equal(undefined)
  })
})
