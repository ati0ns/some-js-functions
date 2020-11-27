/**
 * Get an object's value at any level by a set of keys.
 * @param {object} obj
 * @param  {...string} keys Keys in order from which to get the value.
 * @returns {object}
 */
module.exports=(obj,...keys)=>{const z=keys;if(z.length==1)z=z.flat();if(typeof z=="string")z=z.split(".");const r={current:obj,steps:[]};for(const k of z){r.current=r.current[k];if(r.current==null)break;r.steps.push(r.current)}return r}