/**
 * Converts the ES version in a string.
 * @param {string} s The string where to change the ES version.
 * @param {string} g Indicates the wanted ES version. `ES6` | `ESM`
 */
module.exports=(s,g="ES6")=>{if(typeof s!="string"||!s)return;return g=="ES6"?s.replace(/import\s+(?:(?:([A-z_$][\w$]*)|\*\s+as\s+([A-z_$][\w$]*)|({\s*[A-z_$][\w$]*(?:\s+as\s+[A-z_$][\w$]*)?\s*(?:,\s*[A-z_$][\w$]*(?:\s+as\s+[A-z_$][\w$]*)?\s*)?}))\s+from\s+(("|'|`).*\5)|(("|'|`).*\7))/g,(_,...a)=>a[0]||a[1]||a[2]?`const ${a[0]||a[1]||a[2]} = require(${a[3]})`:a[5]&&`require(${a[5]})`).replace(/([A-z_$][\w$]*)\s+as\s+([A-z_$][\w$]*)/g,"$1: $2"):null}