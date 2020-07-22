# Kleen JS
Readable String Sanitizer

# Installation
```javascript
npm install kleen-js
// or
yarn add kleen-js
```

# Usage
```javascript
import kleen from 'kleen-js'

kleen.toSSN('123456789') // returns '123-45-6789'
```

# Documentation
Functions are split into two types: core and utilities. Core functions transform strings in customizable ways. Utility functions are built with core functions and transform the strings in concrete ways.

Core Functions

- [removeByRegex](#removeByRegex)
- [removeNonDigits](#removeNonDigits)
- [limitToLength](#limitToLength)
- [addStringAtPosition](#addStringAtPosition)
- [addStringAtPositionIfLength](#addStringAtPositionIfLength)

Utility Functions
- [toShortUSPostalCode](#toShortUSPostalCode)
- [toLongUSPostalCode](#toLongUSPostalCode)
- [toSSN](#toSSN)
- [toPhone](#toPhone)


## Core Functions

<a name="removeByRegex"></a>
### Remove By Regex
`removeByRegex(String)`

removes any of the found regex

```javascript
kleen.removeByRegex('abc123', /\d/g) // returns 'abc'
```

<a name="removeNonDigits"></a>
### Remove Non Digits
`removeNonDigits(String)`

remove all non-digit characters (anything except 0-9)

```javascript
kleen.removeNonDigits('abc123') // returns '123'
```

<a name="limitToLength"></a>
### Limit to Length
`limitToLength(String, maxLength:Int)`

limits the string to the given maxLength

```javascript
kleen.limitToLength('abc123', 3) // returns 'abc'
kleen.limitToLength('ab', 3) // returns 'ab'
```

<a name="addStringAtPosition"></a>
### Add String at Position
`addStringAtPosition(String, stringToAdd:String, position:Int)`

adds the given string at the position

if the original string length is not as long as the position, does nothing

```javascript
kleen.addStringAtPosition('123456789', '-', 5) // returns '12345-6789'
kleen.addStringAtPosition('12345', '-', 5) // returns '12345-'
kleen.addStringAtPosition('123', '-', 5) // returns '123'
```

<a name="addStringAtPositionIfLength"></a>
### Add String at Position If Length
`addStringAtPositionIfLength(String, stringToAdd:String, position:Int, length:Int)`

adds the given string at the position if the original string is of the given length

if the original string length is not as long as the given length, does nothing

if the original string length is not as long as the position, does nothing

```javascript
kleen.addStringAtPositionIfLength('123456789', '-', 5) // returns '12345-6789'
kleen.addStringAtPositionIfLength('12345', '-', 5, 6) // returns '12345'
kleen.addStringAtPositionIfLength('123', '-', 5, 6) // returns '123'
```

## Utility Functions

<a name="toShortUSPostalCode"></a>
### To Short US Postal Code
`toShortUSPostalCode(String)`

formats the string to as close to a 5 digit postal code as possible

```javascript
kleen.toShortUSPostalCode('abc123') // returns '123'
kleen.toShortUSPostalCode('123456-789') // returns '12345'
```

<a name="toLongUSPostalCode"></a>
### To Long US Postal Code
`toLongUSPostalCode(String)`

formats the string to as close to a 5-4 digit postal code as possible

```javascript
kleen.toLongUSPostalCode('abc12345678987') // returns '12345-6789'
kleen.toLongUSPostalCode('ab23') // returns '23'
```

<a name="toSSN"></a>
### To SSN
`toSSN(String)`

formats the string to a US SSN

```javascript
kleen.toSSN('123456789') // returns '123-45-6789'
kleen.toSSN('a2b456') // returns '245-6'
```

<a name="toPhone"></a>
### To Phone
`toPhone(String)`

formats the string to a US Phone Number

```javascript
kleen.toPhone('1234567890') // returns '(123) 456-7890'
kleen.toPhone('a2b456') // returns '(245) 6'
```

# Development
PR's Welcome!

Please update code, tests, README, and bump the version number. I'll handle rebuilding the code and `npm publish`'ing after the PR is in.

`yarn test --watch` to run jest tests (and watch for future changes to those tests)

`yarn build` to build the most recent code before posting PR
