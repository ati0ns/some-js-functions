/**
 * Splits an array as to split a string instead of using join then split methods.
 * @param {Array} arr
 * @param {string} splitArg
 * @param {object} params
 * @returns {Array}
 */
module.exports = (arr, splitArg, params = { flat: true, limit: 0 }) => {
    if (!(arr instanceof Array) || typeof splitArg != "string" && !(splitArg instanceof RegExp) || typeof params != "object" && params !== undefined) return null
    const flat = typeof params.flat == "boolean" ? params.flat : !0
    const limit = typeof params.limit == "number" ? params.limit || Infinity : Infinity

    const res = []
    const lim = arr.length

    if (flat) {
        for (let i = 0; i < lim; i++) {
            if (i >= limit) { for (const e of arr.slice(i)) res.push(e); break }
            (typeof splitArg == "string" ? arr[i] == splitArg : splitArg.test(arr[i])) || res.push(arr[i])
        }
    } else {
        res[0] = []
        for (let i = 0; i < lim; i++) {
            if (i >= limit) { res.push(arr.slice(i)); break }
            (typeof splitArg == "string" ? arr[i] == splitArg : splitArg.test(arr[i])) ? res[res.length - 1][0] && res.push([]) : res[res.length - 1].push(arr[i])
        }
        if (!res[res.length - 1][0]) res.pop()
    }

    return res
}