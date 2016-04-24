XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var mktime = require('/Users/kvz/code/phpjs/src/php/datetime/mktime.js')

describe('php.datetime.mktime.js', function () {
  it('should pass example 1', function (done) {
    mktime(14, 10, 2, 2, 1, 2008)
    var expected = 1201875002
    var result = mktime(14, 10, 2, 2, 1, 2008)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    mktime(0, 0, 0, 0, 1, 2008)
    var expected = 1196467200
    var result = mktime(0, 0, 0, 0, 1, 2008)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    make = mktime()
    td = new Date()
    real = Math.floor(td.getTime() / 1000)
    diff = (real - make)
    diff < 5
    var expected = true
make = mktime()
td = new Date()
real = Math.floor(td.getTime() / 1000)
diff = (real - make)
    var result = diff < 5
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    mktime(0, 0, 0, 13, 1, 1997)
    var expected = 883612800
    var result = mktime(0, 0, 0, 13, 1, 1997)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    mktime(0, 0, 0, 1, 1, 1998)
    var expected = 883612800
    var result = mktime(0, 0, 0, 1, 1, 1998)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 6', function (done) {
    mktime(0, 0, 0, 1, 1, 98)
    var expected = 883612800
    var result = mktime(0, 0, 0, 1, 1, 98)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 7', function (done) {
    mktime(23, 59, 59, 13, 0, 2010)
    var expected = 1293839999
    var result = mktime(23, 59, 59, 13, 0, 2010)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 8', function (done) {
    mktime(0, 0, -1, 1, 1, 1970)
    var expected = -1
    var result = mktime(0, 0, -1, 1, 1, 1970)
    expect(result).to.deep.equal(expected)
    done()
  })
})