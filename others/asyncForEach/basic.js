/**
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Promise<void>}
 * @async
 */
module.exports = async(arr, fn) => {
    if (!Array.isArray(arr) || typeof fn != "function") return null;

    const lim = arr.length;
    for (let i = 0; i < lim;) await fn(arr[i], i++, arr);
};