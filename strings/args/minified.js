/**
 * Splits the string into groups of arguments.
 * @param {string} str
 * @param {number} group Maximum groups' length. 0 for Infinity (same as `<String>.split()`). Default is 1.
 */
module.exports=(str,group=1)=>{if(isNaN(group)||group<0)return null;return str.match(RegExp(`\\S+(?:\\s+\\S+){${group-1}}|\\S+(\\s+\\S+)*`,"g"))}