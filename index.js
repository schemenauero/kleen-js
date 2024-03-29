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

// adds the given string at the position if the original string is of the given length
// if the original string length is not as long as the given length, does nothing
// with '123456789', '-', 5 returns '12345-6789'
exports.addStringAtPositionIfLength = (str, addStr, position, length) => {
  if (str.length < length) return str
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
    str => exports.addStringAtPositionIfLength(str, '-', 5, 6),
  ])(str)

// formats the string to a US SSN
// with '123456789' returns '123-45-6789'
// with 'a2b456' returns '245-6'
exports.toSSN = str =>
  flow([
    exports.removeNonDigits,
    str => exports.limitToLength(str, 9),
    str => exports.addStringAtPositionIfLength(str, '-', 3, 4),
    str => exports.addStringAtPositionIfLength(str, '-', 6, 7),
  ])(str)

// formats the string to a US Phone Number
// with '1234567890' returns '(123) 456-7890'
// with 'a2b456' returns '(245) 6'
exports.toUSPhone = str =>
  flow([
    exports.removeNonDigits,
    str => exports.limitToLength(str, 10),
    str => exports.addStringAtPositionIfLength(str, '(', 0, 1),
    str => exports.addStringAtPositionIfLength(str, ')', 4, 5),
    str => exports.addStringAtPositionIfLength(str, ' ', 5, 6),
    str => exports.addStringAtPositionIfLength(str, '-', 9, 10),
  ])(str)

// formats the string to a UK Phone Number
// with '01234567890' returns '01234 567890'
// with 'a2b456' returns '2456'
exports.toUKPhone = str =>
  flow([
    exports.removeNonDigits,
    str => exports.limitToLength(str, 12),
    str => exports.addStringAtPositionIfLength(str, ' ', 5, 6),
  ])(str)

