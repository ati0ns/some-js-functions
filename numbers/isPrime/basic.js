/**
 * Tells if an integer is prime or not.
 * @param {number} num
 */
module.exports.isIntPrime = num => {
    if (num < 2) return !1
    const lim = num / 2
    for (let i = 2; i <= lim; i += 2) {
        if (num % i == 0) return !1
        i == 2 && i--
    }
    return !0
}

/**
 * Tells if a big integer is prime or not.
 * @param {bigint} num
 */
module.exports.isBigIntPrime = num => {
    if (num < 2) return !1
    const lim = num / 2
    for (let i = 2n; i <= lim; i += 2n) {
        if (num % i == 0) return !1
        i == 2 && i--
    }
    return !0
}

/**
 * Tells if a number is prime or not.
 * @param {number|bigint} num
 */
module.exports = num => typeof num == "bigint" ? this.isBigIntPrime(num) : this.isIntPrime(num)