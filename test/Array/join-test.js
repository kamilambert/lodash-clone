let expect = require ('chai').expect
let join = require ('../../src/Array/join')

describe('join()', () => {
  it('Converts all elements in array into a string separated by separator', () => {
    expect(join(['a', 'b', 'c'], '~')).to.deep.equal('a~b~c')
    expect(join([])).to.deep.equal(undefined)
  })
})
