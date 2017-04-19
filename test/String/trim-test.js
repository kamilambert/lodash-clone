let expect = require ('chai').expect
let trim = require ('../../src/String/trim')

describe.only('trim()', () => {
  it('trims two numbers', () => {
    expect(trim('    abc    ')).to.deep.equal('abc')
    expect(trim('abc--', '--')).to.deep.equal('abc')
    expect(trim('----abc', '----')).to.deep.equal('abc')
  })
})
