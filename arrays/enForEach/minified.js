/**
 * @param {Array} arr
 * @param {Function} fn
 * @param {boolean} options Default is `{ asynchronous: true, end: false }`. 
 * @returns {Promise<void|boolean>}
 * @async
 */
module.exports=async(arr,fn,options)=>{if(!Array.isArray(arr)||typeof fn!="function"||typeof options!="object")return null;const{asynchronous,end}={asynchronous:[!0,!1].includes(options.asynchronous)?options.asynchronous:!0,end:[!0,!1].includes(options.end)?options.end:!1},l=arr.length;for(let i=end?l-1:0;end?i>-1:i<l;end?i--:i++)asynchronous==!0?await fn(arr[i],i,arr):fn(arr[i],i,arr);return arr}