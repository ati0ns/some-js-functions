# areTogether() function on Array
## What's the goal ?
We want to see if an array has a sequence of given elements. e.g. It can be used to filter bad words.

### Examples
`["I", "ate", "chocolate", "sick", "my", "duck"]` => includes "sick" then "my" then "duck"? => `true`<br>
`["An", "aquatic", "horse", "hits", "a", "black", "sheep"]` => includes "horse" then "sheep"? => `false`<br>
<br>
## Line-by-line analysis
```js
module.exports = (arr, ...args) => {
```
A function named `areTogether` is defined as the default export of the file and takes two array of anything as parameter.
The second parameter represents the elements **in order** we want to find them in the Array `arr`.
```js
    if (args[0] instanceof Array) args = args[0];
```
If the first element of `args` is an Array, it means that the arguments are given into an array inside the `args` Array, so it should be flatten by taking only the first argument instead of all of `args`.
```js
    if (!(arr instanceof Array) || !(args instanceof Array)) return null;
```
If either `arr` or `args` is not an Array, it means that the given arguments were wrong and the function can't do anything so it returns `null`.
```js
    let i = -1;
```
`i` is the **i**ndex of the current first character of `args` found in `arr`. Its default value is -1 because the index will be attribute at the start of each loop iteration and it must be less than 0 if we want to start the search of the first `indexOf` at 0.
```js
    const lim = arr.length - args.length;
```
`lim` is the number of elements in `arr`. It is defined to do not look the property `length` of `arr` at each loop iteration. The elements to find can not be found if there do not still enough enough args so: `lim - args.length`.
```js
    while (i < lim) {
```
While the index of the first wanted character is less than the number of elements, the loop is being executed to try to find the wanted elements.
```js
        i = arr.indexOf(args[0], i + 1);
```
`i` now takes the index of the first element of `args` in `arr`.
```js
        if (i < 0) return !1;
```
If the `i` is equal to -1 (so is less than 0) the function returns `false` (`!1` returns `false` so they are both the same value) and breaks the loop because there is no more element which is the begining of `args` in `arr` and which is followed by the others.
```js
        let j = 1;
```
`j` is the increment of each element in the next `every` function because we want to check if `arr[i + 1]` is true and again with `arr[i + 2]`, `arr[i + 3]`... In fact, it is `arr[i + j]`.
```js
        if (args.slice(1).every(v => arr[i + j++] === v)) return !0;
```
If all the elements of `args` match in order with elements of `arr`, so the function returns `true` (`!0` returns `true` as `!1` returns `false`) and breaks the loop.
```js
    } // while-loop's end
}; // function's end
```