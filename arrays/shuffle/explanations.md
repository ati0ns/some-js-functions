# shuffle() function
## What's the goal ?
We want to change the positions of the elements of an Array randomly. e.g. It can be used to make a permutation of a set; or to choose objects like players in a random order as to choose the order of the opponents.

### Examples
`[1, "3", {}, null]` => *shake shake* => `["3", {}, [], 1, null]`<br>
`[1, "3", {}, null]` => *shake shake* => `[{}, null, 1, "3", []]`<br>
<br>
## Line-by-line analysis
```js
module.exports = arr => {
```
A function named `shuffle` is defined as the default export of the file and takes an Array as parameter.
```js
    const lim = arr.length;
```
`lim` is the number of  elements in `arr`.
```js
    for (let i = 0; i < lim; i++) {
```
`i` is the **i**ndex of an element in `arr`. Its default value is 0 because it will take the first element in `arr` then the others. `[0:"a", 1:"b", 2:"c"]`
While the index is less than the number of indexes, so there still at least one element which was not choose to be randomly move, the loop iterates.
At each end of iteration, `i` takes the value of the next value.
```js
        const j = Math.floor(Math.random() * lim);
```
`j` is the index of a random element in the Array.
```js
        [arr[i], arr[j]] = [arr[j], arr[i]];
```
The elements at the indexes `i` and `j` are now the elements at the indexes `j` and `i` **in this order**.
```js
    } // for-loop's end
    return this;
}; // function's end
```
The functions returns the `arr` shuffled. But `arr` is also modified without using the returned value.