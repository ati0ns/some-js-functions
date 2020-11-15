/**
 * Converts the ES version in a string.
 * @param {string} str The string where to change the ES version.
 * @param {string} goal Indicates the wanted ES version. `ES6` | `ESM`
 */
module.exports = (str, goal = "ES6") => {
    if (typeof str != "string" || !str) return;
    return goal == "ES6" ? str.replace(
        /import\s+(?:(?:([A-z_$][\w$]*)|\*\s+as\s+([A-z_$][\w$]*)|({\s*[A-z_$][\w$]*(?:\s+as\s+[A-z_$][\w$]*)?\s*(?:,\s*[A-z_$][\w$]*(?:\s+as\s+[A-z_$][\w$]*)?\s*)?}))\s+from\s+(("|'|`).*\5)|(("|'|`).*\7))/g,
        (_, ...a) => a[0] || a[1] || a[2] ? `const ${a[0] || a[1] || a[2]} = require(${a[3]})` : a[5] && `require(${a[5]})`
    ).replace(/([A-z_$][\w$]*)\s+as\s+([A-z_$][\w$]*)/g, "$1: $2") : null;
};