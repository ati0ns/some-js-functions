/**
 * Change randomly the array's elements' positions.
 * @param {Array} args
 */
module.exports=args=>{const a=args,l=a.length;for(let i=0;i<l;i++){const j=Math.floor(Math.random()*l);[a[i],a[j]]=[a[j],a[i]]}return a}