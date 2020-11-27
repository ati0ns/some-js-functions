/**
 * @param {string} txt
 * @param {object} params
 * @param  {...string} beacons
 * @returns {Promise<object>}
 * @async
 */
module.exports=async(txt,params={caseSensitive:!1,eToFetch:{type:"word",amount:1}},...beacons)=>{const p=params,b=beacons;if(!p.caseSensitive)p.caseSensitive=!1;if(!p.eToFetch)p.eToFetch={type:"word",amount:1};if(!p.eToFetch.type)p.eToFetch.type="word";if(!p.eToFetch.amount)p.eToFetch.amount=1;const{caseSensitive,eToFetch}=p,t=txt,s=Array.isArray(t)?t.join(" "):t;if(!caseSensitive)t=t.toLowerCase();if(typeof t=="string")t=t.split(/\s+/);if(!b[1])b=b.flat();if(!caseSensitive)b.map(b=>b.toLowerCase());if(!Array.isArray(t)||!Array.isArray(b)||!b[0]||!["word","char"].includes(eToFetch.type))return null;let I=0;const r=[],l=t.length;for(let i=0;i<l;i++){if(b.includes(t[i])){const o={name:t[i],indexes:{array:i,text:s.indexOf(t[i],I)}};I=s.indexOf(t[i],I+1);o.content=(eToFetch.type=="word"?t:s.split('').slice(t[i].length)).slice(eToFetch.type=="word"?i+1:I,(eToFetch.type=="word"?i:I)+1+eToFetch.amount);r.push(o)}}return r}