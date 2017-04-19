let expect = require ('chai').expect
let startsWith = require ('../../src/String/startsWith')

describe('startsWith()', () => {
  it('startsWiths two numbers', () => {
    expect(startsWith('abc', 'a')).to.deep.equal(true)
    expect(startsWith('abc', 'b')).to.deep.equal(false)
    expect(startsWith('abc', 'b', 1)).to.deep.equal(true)
  })
})
