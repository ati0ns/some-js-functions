/**
 * Gives the minimum amount of squares found to fill a rectangle of `x` and `y` dimensions.
 * @param {bigint} x
 * @param {bigint} y
 * @returns {object}
 */
module.exports.bigintCheck = (x, y) => {
    x = BigInt(x), y = BigInt(y);
    const res = { steps: [], x, y, final: 0n };
    while (x && y) {
        const min = x > y ? y : x;
        const ratio = (x > y ? x : y) / min;
        res.steps.push(ratio) && (res.final += ratio) && (x > y ? x -= ratio * min : y -= ratio * min);
    }
    return res;
};

/**
 * Gives the minimum amount of squares found to fill a rectangle of `x` and `y` dimensions.
 * @param {number} x
 * @param {number} y
 * @returns {object}
 */
module.exports.intCheck = (x, y) => {
    const res = { steps: [], x, y, final: 0 };
    while (x && y) {
        const min = x > y ? y : x;
        const ratio = Math.floor((x > y ? x : y) / min);
        res.steps.push(ratio) && (res.final += ratio) && (x > y ? x -= ratio * min : y -= ratio * min);
    }
    return res;
};

/**
 * Gives the minimum amount of squares found to fill a rectangle of `x` and `y` dimensions.
 * @param {number|bigint} x
 * @param {number|bigint} y
 * @returns {object}
 */
module.exports = (x, y) => typeof x == "bigint" || typeof y == "bigint" ? this.bigintCheck(x, y) : this.intCheck(x, y);