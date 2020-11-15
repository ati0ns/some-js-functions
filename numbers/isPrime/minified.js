/**
 * Tells if an integer is prime or not.
 * @param {number} n
 */
module.exports.isIntPrime=n=>{if(n<2)return!1;const l=n/2;for(let i=2;i<=l;i+=2){if(n%i==0)return!1;i==2&&i--}return!0}
/**
 * Tells if a big integer is prime or not.
 * @param {bigint} n
 */
module.exports.isBigIntPrime=n=>{if(n<2)return!1;const l=n/2;for(let i=2n;i<=l;i+=2n){if(n%i==0)return!1;i==2&&i--}return!0}
/**
 * Tells if a number is prime or not.
 * @param {number|bigint} n
 */
module.exports=n=>typeof n=="bigint"?this.isBigIntPrime(n):this.isIntPrime(n);