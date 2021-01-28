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


| [areTogether](https://github.com/ati0ns/some-js-functions/tree/master/arrays/areTogether) | [enForEach](https://github.com/ati0ns/some-js-functions/tree/master/arrays/enForEach) | [shuffle](https://github.com/ati0ns/some-js-functions/tree/master/arrays/shuffle) | [split](https://github.com/ati0ns/some-js-functions/tree/master/arrays/split) | [redo](https://github.com/ati0ns/some-js-functions/tree/master/others/redo) |
| - | - | - | - | - |

#### Date


| [toDate](https://github.com/ati0ns/some-js-functions/tree/master/dates/toDate) | [redo](https://github.com/ati0ns/some-js-functions/tree/master/others/redo) |
| - | - |

#### Integer/BigInt


| [isPrime](https://github.com/ati0ns/some-js-functions/tree/master/numbers/isPrime) | [redo](https://github.com/ati0ns/some-js-functions/tree/master/others/redo) |
| - | - |

#### Object


| [getObjValue](https://github.com/ati0ns/some-js-functions/tree/master/objects/getObjValue) | [redo](https://github.com/ati0ns/some-js-functions/tree/master/others/redo) |
| - | - |

#### String


| [args](https://github.com/ati0ns/some-js-functions/tree/master/strings/args) | [findBeacons](https://github.com/ati0ns/some-js-functions/tree/master/strings/findBeacons) | [simplify](https://github.com/ati0ns/some-js-functions/tree/master/strings/simplify) | [toMs](https://github.com/ati0ns/some-js-functions/tree/master/strings/toMs) | [redo](https://github.com/ati0ns/some-js-functions/tree/master/strings/vars) | [convertES](https://github.com/ati0ns/some-js-functions/tree/master/others/convertES) | [toClauses](https://github.com/ati0ns/some-js-functions/tree/master/strings/toClauses) | [vars](https://github.com/ati0ns/some-js-functions/tree/master/strings/vars) |
| - | - | - | - | - | - | - | - |

##### A bit minifiedTips

Minification is to write exactly the same program but with less characters to make it more light.
Here are some transformations you can do to improve your programs' efficiency.
<br><br>


| Basic | Minified | Notes |
| :-: | :-: | :-: |
| true | !0 | 1 works in specific cases. |
| false | !1 | 0 works in specific cases. |
| function() { return thing } | () => thing | Doesn't work with`this`.<br>[Why?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions) |

Do not minify arguments' names! e. g. `(name, age, weigth) => ...` is better than `(n, a, w) => ...` but you can minify the variables' names later inside the function's execution block.
