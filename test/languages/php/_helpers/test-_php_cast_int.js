// warning: This file is auto generated by `npm run build:tests`
// Do not edit by hand!
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('../../../../src/php/info/ini_set') // eslint-disable-line no-unused-vars,camelcase
var ini_get = require('../../../../src/php/info/ini_get') // eslint-disable-line no-unused-vars,camelcase
var _php_cast_int = require('../../../../src/php/_helpers/_php_cast_int.js') // eslint-disable-line no-unused-vars,camelcase

describe('src/php/_helpers/_php_cast_int.js (tested in test/languages/php/_helpers/test-_php_cast_int.js)', function () {
  it('should pass example 1', function (done) {
    var expected = 0
    var result = _php_cast_int(false)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    var expected = 1
    var result = _php_cast_int(true)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    var expected = 0
    var result = _php_cast_int(0)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    var expected = 1
    var result = _php_cast_int(1)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    var expected = 3
    var result = _php_cast_int(3.14)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 6', function (done) {
    var expected = 0
    var result = _php_cast_int('')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 7', function (done) {
    var expected = 0
    var result = _php_cast_int('0')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 8', function (done) {
    var expected = 0
    var result = _php_cast_int('abc')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 9', function (done) {
    var expected = 0
    var result = _php_cast_int(null)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 10', function (done) {
    var expected = 0
    var result = _php_cast_int(undefined)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 11', function (done) {
    var expected = 123
    var result = _php_cast_int('123abc')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 12', function (done) {
    var expected = 123
    var result = _php_cast_int('123e4')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 13', function (done) {
    var expected = 8589934593
    var result = _php_cast_int(0x200000001)
    expect(result).to.deep.equal(expected)
    done()
  })
})
