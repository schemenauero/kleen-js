import kleen from '../index.js'

describe('utility functions', () => {

  test('toShortUSPostalCode', () => {
    expect(kleen.toShortUSPostalCode('abc123')).toEqual('123')
    expect(kleen.toShortUSPostalCode('123456-789')).toEqual('12345')
  })

  test('toLongUSPostalCode', () => {
    expect(kleen.toLongUSPostalCode('12345-6789')).toEqual('12345-6789')
    expect(kleen.toLongUSPostalCode('hg1234ghjkvycuo9173712384v12hj')).toEqual('12349-1737')
  })

  test('toSSN', () => {
    expect(kleen.toSSN('123-45-6789')).toEqual('123-45-6789')
    expect(kleen.toSSN('123456789')).toEqual('123-45-6789')
    expect(kleen.toSSN('1234hbjsadfasd56789')).toEqual('123-45-6789')
    expect(kleen.toSSN('1234')).toEqual('123-4')
    expect(kleen.toSSN('123-45')).toEqual('123-45')
    expect(kleen.toSSN('123-456')).toEqual('123-45-6')
    expect(kleen.toSSN('123-')).toEqual('123')
    expect(kleen.toSSN('123')).toEqual('123')
    expect(kleen.toSSN('12')).toEqual('12')
    expect(kleen.toSSN('abc')).toEqual('')
  })

})
