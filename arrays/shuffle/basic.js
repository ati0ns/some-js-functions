/**
 * Change randomly the array's elements' positions.
 * @param {Array} arr
 */
module.exports = arr => {
    const lim = arr.length;
    for (let i = 0; i < lim; i++) {
        const j = Math.floor(Math.random() * lim);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};