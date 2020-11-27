/**
 * Get an object's value at any level by a set of keys.
 * @param {object} obj
 * @param  {...string} keys Keys in order from which to get the value.
 * @returns {object}
 */
module.exports = (obj, ...keys) => {
    if (keys.length == 1) keys = keys.flat();
    if (typeof keys == "string") keys = keys.split(".");

    const res = { current: obj, steps: [] };
    for (const k of keys) {
        res.current = res.current[k];
        if (res.current == null) break;
        res.steps.push(res.current);
    }
    return res;
};