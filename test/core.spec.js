import kleen from '../index.js'

describe('core functions', () => {

  test('removeByRegex', () => {
    expect(kleen.removeByRegex('abc123', /\d/g)).toEqual('abc')
  })

  test('removeNonDigits', () => {
    expect(kleen.removeNonDigits('abc123', /\d/g)).toEqual('123')
  })

  test('limitToLength', () => {
    expect(kleen.limitToLength('abc123', 3)).toEqual('abc')
  })

  test('addStringAtPosition', () => {
    expect(kleen.addStringAtPosition('abc123', 'def', 3)).toEqual('abcdef123')
    expect(kleen.addStringAtPosition('a', 'def', 3)).toEqual('a')
    expect(kleen.addStringAtPosition('abc123', 'def', 6)).toEqual('abc123def')
    expect(kleen.addStringAtPosition('abc123', '', 6)).toEqual('abc123')
  })

})
