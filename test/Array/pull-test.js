let expect = require ('chai').expect
let pull = require ('../../src/Array/pull')

describe('pull()', () => {
  it('Removes all given values from array', () => {
    expect(pull([1, 2, 3], 2)).to.deep.equal([1, 3])
    expect(pull(['watch', 'belt', 'hello'], 'watch')).to.deep.equal(['belt', 'hello'])
    expect(pull([])).to.deep.equal(undefined)
  })
})
