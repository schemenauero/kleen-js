import kleen from '../index.js'

describe('utility functions', () => {

  test('toShortUSPostalCode', () => {
    expect(kleen.toShortUSPostalCode('abc123')).toEqual('123')
    expect(kleen.toShortUSPostalCode('123456-789')).toEqual('12345')
    expect(kleen.toShortUSPostalCode('12345-')).toEqual('12345')
  })

  test('toLongUSPostalCode', () => {
    expect(kleen.toLongUSPostalCode('12345-6789')).toEqual('12345-6789')
    expect(kleen.toLongUSPostalCode('12345-')).toEqual('12345')
    expect(kleen.toLongUSPostalCode('12345')).toEqual('12345')
    expect(kleen.toLongUSPostalCode('123456')).toEqual('12345-6')
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

  test('toPhone', () => {
    expect(kleen.toPhone('')).toEqual('')
    expect(kleen.toPhone('123 456-7890')).toEqual('(123) 456-7890')
    expect(kleen.toPhone('1234567890')).toEqual('(123) 456-7890')
    expect(kleen.toPhone('1234hbjsadfasd567890')).toEqual('(123) 456-7890')
    expect(kleen.toPhone('1')).toEqual('(1')
    expect(kleen.toPhone('12')).toEqual('(12')
    expect(kleen.toPhone('123')).toEqual('(123')
    expect(kleen.toPhone('1234')).toEqual('(123) 4')
    expect(kleen.toPhone('123 45')).toEqual('(123) 45')
    expect(kleen.toPhone('123 456')).toEqual('(123) 456')
    expect(kleen.toPhone('1234567')).toEqual('(123) 456-7')
  })

})
