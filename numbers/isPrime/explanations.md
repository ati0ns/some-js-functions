# isPrime() function
## What's the goal ?
We want to find numbers which are primes, also add options to know which is the smallest divisor who makes the number prime e.g..

### Examples
`7` => is prime? => `true`<br>
`1834` => is prime? => `false`<br>
`17384238574268374617298478n` => is prime? => `false`<br>
<br>
## Line-by-line analysis
```js
module.exports = num => {
```
A function named `isPrime` is defined as the default export of the file and takes a number as parameter.
```js
    if (num < 2) return !1;
```
If `num` is less than 2, the function returns `false` because a number `n` is not prime for `n ∈ ]-∞;1]`.
```js
    const lim = num / 2;
```
`lim` defines the amount of iterations to do. It is `num` divided by 2 because `num` can't be divided by a number higher than its half.
```js
    for (let i = 2; i <= lim; i += 2) {
```
`i` is the the current divisor. While the divisor is less than or equal to the limit, the loop iterates. The divisor is increased by 2 after each iteration because an even divisor do not divise any number when 2 do not.
```js
        if (num % i == 0) return !1;
```
If `num` modulo the divisor `i` returns 0, it means that `num` can be divided and so it is not a prime number. The function returns `false`.
```js
        i == 2 && i--;
```
If the current divisor is 2, it becomes 1 then 3 because of the indication `i += 2` in the for-loop. It is only activated at the first iteration.
```js
    } // for-loop's end
    return !0;
}; // function's end
```
The function returns `true` if it did not seen any divisor for `num` which is prime.

```js
module.exports = num => {
    if (num < 2) return !1;
    const lim = num / 2;
    for (let i = 2n; i <= lim; i += 2n) {
        if (num % i == 0) return !1;
        i == 2 && i--;
    }
    return !0;
};
```
The same function of the other except that it supports BigInt instead of Number.