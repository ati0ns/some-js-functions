/**
 * @param {Array} arr
 * @param {Function} fn
 * @returns {Promise<void>}
 * @async
 */
module.exports=async(arr,fn)=>{if(!Array.isArray(arr)||typeof f!="function")return null;const l=arr.length;for(let i=0;i<l;)await fn(arr[i],i++,arr)}