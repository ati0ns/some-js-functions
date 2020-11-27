# README
## Some functions can be prototyped
If you want functions to be in the prototype of native objects as String, Number or Array, you can place them do like below.
```js
const args = require("path/to/args/functions.js");

console.log(args("string to split into args", 2))
// ["string to", "split into", "args"]
```
Well it works but we don't want to this method.<br>
<br>
```js
String.prototype.args = function (group) { return require("path/to/args/functions.js")(this, group) }

console.log("Maybe clouds are drunk and fly in the dirt.".args(5));
// ["Maybe clouds are drunk and", "fly in the dirt."]
```
<br><br>
```js
// Without prototyped function.
args("<String>".toLowerCase().trim()).join("|")

// With prototyped function.
"<String>".toLowerCase().trim().args().join("|")
```
Choose your weapon!<br>
<br>
### List of functions that can be prototyped
#### Array
[areTogether](https://github.com/ati0ns/some-js-functions/tree/master/arrays/areTogether) | [asyncForEach](https://github.com/ati0ns/some-js-functions/tree/master/others/asyncForEach) | [shuffle](https://github.com/ati0ns/some-js-functions/tree/master/arrays/shuffle) | [split](https://github.com/ati0ns/some-js-functions/tree/master/arrays/split)
--|--|--|--
#### Date
[toDate](https://github.com/ati0ns/some-js-functions/tree/master/dates/toDate) |
--|
#### Integer/BigInt
[isPrime](https://github.com/ati0ns/some-js-functions/tree/master/numbers/isPrime) |
--|
#### Object
[getObjValue](https://github.com/ati0ns/some-js-functions/tree/master/objects/getObjValue) |
--|
#### String
[args](https://github.com/ati0ns/some-js-functions/tree/master/strings/args) | [findBeacons](https://github.com/ati0ns/some-js-functions/tree/master/strings/findBeacons) | [simplify](https://github.com/ati0ns/some-js-functions/tree/master/strings/simplify) | [toMs](https://github.com/ati0ns/some-js-functions/tree/master/strings/toMs)
--|--|--|--
##### Others
[convertES](https://github.com/ati0ns/some-js-functions/tree/master/others/convertES) |
--|
<br><br>
## Tips
### A bit minified
Minification is to write exactly the same program but with less characters to make it more light.
Here are some transformations you can do to improve your programs' efficiency.
<br><br>
Basic | Minified
:-:|:-:
true |  !0
false  |  !1
function() { return thing }  |  () => thing