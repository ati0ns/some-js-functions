/**
 * Change randomly the array's elements' positions.
 * @param {Array} a
 */
module.exports=a=>{const l=a.length;for(let i=0;i<l;i++){const j=Math.floor(Math.random()*l);[a[i],a[j]]=[a[j],a[i]]}return a}