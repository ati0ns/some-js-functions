/**
 * Splits an array as to split a string instead of using join then split methods.
 * @param {Array} arr
 * @param {string} splitArg
 * @param {object} params
 * @returns {Array}
 */
module.exports=(arr,splitArg,params={flat:true,limit:0})=>{const a=arr,A=splitArg,p=params;if(!(a instanceof Array)||typeof A!="string"&&!(A instanceof RegExp)||typeof p!="object"&&p!==undefined)return null;const flat=typeof p.flat=="boolean"?p.flat:!0,limit=typeof p.limit=="number"?p.limit||Infinity:Infinity,r=[],l=a.length;if(flat){for(let i=0;i<l;i++){if(i>=limit){for(const e of a.slice(i))r.push(e);break}(typeof A=="string"?a[i]==A:A.test(a[i]))||r.push(a[i]);}}else{r[0]=[];for(let i=0;i<l;i++){if(i>=limit){r.push(a.slice(i));break}(typeof A=="string"?a[i]==A:A.test(a[i]))?r[r.length-1][0]&&r.push([]):r[r.length-1].push(a[i])}if(!r[r.length-1][0])r.pop()}return r}