/**
 * Tells if many elements are present in order in an Array.
 * @param {Array} a
 * @param  {...*} g Arguments to find in the previous a parameter.
 */
module.exports=(a,...g)=>{if(g[0] instanceof Array)g=g[0];if(!(a instanceof Array)||!(g instanceof Array))return null;let i=-1;const l=a.length-g.length;while(i<l){i=a.indexOf(g[0],i+1);if(i<0)return!1;let j=1;if(g.slice(1).every(v=>a[i+j++]===v))return!0}}