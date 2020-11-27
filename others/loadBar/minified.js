/**
 * Loads a progression bar as a string.
 * @param {number} currLoad Progression of the bar.
 * @param {number} maxLoad Maximum progression of the bar.
 * @param {number} strLen Size of the bar.
 * @param {string} fillChar String for filled unity.
 * @param {string} emptyChar String for empty unity.
 */
module.exports=(currLoad=0,maxLoad=100,strLen=10,fillChar="1",emptyChar="0")=>{const fillLen=Math.round(Math.min(1,currLoad/maxLoad)*strLen);return fillChar.repeat(fillLen).padEnd((strLen-fillLen)*emptyChar.length+fillLen*fillChar.length,emptyChar)}