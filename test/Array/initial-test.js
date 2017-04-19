let expect = require ('chai').expect
let initial = require ('../../src/Array/initial')

describe('initial()', () => {
  it('Gets all but last element of array', () => {
    expect(initial([1, 2, 3])).to.deep.equal([1, 2])
    expect(initial(['watch', 'belt', 'shoes', 'socks'])).to.deep.equal(['watch', 'belt', 'shoes'])
    expect(initial([])).to.deep.equal(undefined)
  })
})
