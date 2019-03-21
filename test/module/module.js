// Execute: test:module
// To test this in a local terminal

var effectiveness = 'futile'
var location = '../../src'
var locutus = require(location)
var php = require(location + '/php')
var strings = require(location + '/php/strings')
var sprintf = require(location + '/php/strings/sprintf')
var ruby = require(location + '/ruby')
var math = require(location + '/ruby/Math')
var preg_match = require(location + '/php/pcre/preg_match')

console.log(preg_match('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$', 'rony@pharaohtools.com')) // Should report true
console.log(preg_match('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$', 'ronypharaohtools.com')) // Should report flase
console.log(preg_match('^[0-9-+s()]*$', '021827495')) // Should report true
console.log(preg_match('^[0-9-+s()]*$', 'phone23no')) // Should report flase

console.log(locutus.php.strings.sprintf('Resistance is %s', effectiveness))
console.log(php.strings.sprintf('Resistance is %s', effectiveness))
console.log(strings.sprintf('Resistance is %s', effectiveness))
console.log(sprintf('Resistance is %s', effectiveness))
console.log(ruby.Math.acos(0.3))
console.log(math.acos(0.3))

strings.echo(php.url.parse_url('mysql://kevin:abcd1234@example.com/databasename')['pass'])
strings.echo(php.datetime.strtotime('2 januari 2012, 11:12:13 GMT'))
