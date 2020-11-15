/**
 * Splits the string into groups of arguments.
 * @param {string} s
 * @param {number} g Maximum groups' length. 0 for Infinity (same as `<String>.split()`). Default is 1.
 */
module.exports=(s,g=1)=>{if(isNaN(g)||g<0)return null;return s.match(RegExp(`\\S+(?:\\s+\\S+){${g-1}}|\\S+(\\s+\\S+)*`,"g"))}