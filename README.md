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

console.log("Maybe coulds are drunk and fly in the dirt.".args(5));
// ["Maybe coulds are drunk and", "fly in the dirt."]
```
<br><br>
```js
// Without prototyped function.
args("<String>".toLowerCase().trim()).join("|")

// With prototyped function.
"<String>".toLowerCase().trim().args().method("|")
```
Choose your weapon!<br>
<br>
### List of functions that can be prototyped
#### Array
* [areTogether](https://github.com/ati0ns/some-js-functions/tree/master/arrays/areTogether)
* [shuffle](https://github.com/ati0ns/some-js-functions/tree/master/array/shuffle)
#### Integer/BigInt
* [isPrime](https://github.com/ati0ns/some-js-functions/tree/master/numbers/isPrime)
#### String
* [args](https://github.com/ati0ns/some-js-functions/tree/master/strings/args)
* [simplify](https://github.com/ati0ns/some-js-functions/tree/master/strings/simplify)