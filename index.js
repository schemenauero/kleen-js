import { flow } from 'lodash'

////////////////////
// Core functions //
////////////////////

// removes any of the found regex
// with 'abc123', /\d/g returns 'abc'
exports.removeByRegex = (str, regex) => str.replace(regex, '')

// remove all non-digit characters (anything except 0-9)
// with 'abc123.4', returns '1234'
exports.removeNonDigits = str => exports.removeByRegex(str, /[^\d]/g)

// limits the string to the given length
// with 'abc123', 3 returns 'abc'
// with 'ab', 3 returns 'ab'
exports.limitToLength = (str, len) => str.substring(0, len)

// adds the given string at the position
// if the original string length is not as long as the position, does nothing
// with '123456789', '-', 5 returns '12345-6789'
exports.addStringAtPosition = (str, addStr, position) => {
  if (str.length < position) return str
  return str.substring(0, position) + addStr + str.substring(position)
}

///////////////////////////////////////////////////
// Utility functions (built with core functions) //
///////////////////////////////////////////////////

// formats the string to as close to a 5 digit postal code as possible
// with 'abc123' returns '123'
// with '123456-789' returns '12345'
exports.toShortUSPostalCode = str =>
  flow([
    exports.removeNonDigits,
    str => exports.limitToLength(str, 5),
  ])(str)

// formats the string to as close to a 5-4 digit postal code as possible
// with 'abc12345678987' returns '12345-6789'
// with 'ab23' returns '23'
exports.toLongUSPostalCode = str =>
  flow([
    exports.removeNonDigits,
    str => exports.limitToLength(str, 9),
    str => exports.addStringAtPosition(str, '-', 5),
  ])(str)

// formats the string to a US SSN
// with '123456789' returns '123-45-6789'
// with 'a2b456' returns '245-6'
exports.toSSN = str =>
  flow([
    exports.removeNonDigits,
    str => exports.limitToLength(str, 9),
    str => exports.addStringAtPosition(str, '-', 3),
    str => exports.addStringAtPosition(str, '-', 6),
  ])(str)
