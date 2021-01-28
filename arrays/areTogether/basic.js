/**
 * Tells if many elements are present in order in an Array.
 * @param {Array} arr
 * @param  {...*} args Arguments to find in the previous arr parameter.
 */
module.exports = (arr, ...args) => {
    if (args[0] instanceof Array) args = args[0]
    if (!(arr instanceof Array) || !(args instanceof Array)) return null

    let i = -1
    const lim = arr.length - args.length
    while (i < lim) {
        i = arr.indexOf(args[0], i + 1)
        if (i < 0) return !1
        let j = 1
        if (args.slice(1).every(v => arr[i + j++] === v)) return !0
    }
}