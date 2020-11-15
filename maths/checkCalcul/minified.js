/**
 * Checks if a calcul is correct with its operations and parenthesis.
 * @param {string} c
 */
module.exports=c=>{if(!c)return;if(/\(\)|\[\]|[/+-]{2}|\*\*\/|(?<![A-z\d ]|\)|\])\/|(?<![A-z\d ]|\)|\]|(?<!\*)\*)\*|(?<![A-z\d ]|\)|\]|\*\*?)[+-]|(\)|\]) *[A-z\d]|(\d|[A-z]) +(\d|[A-z])|[A-z] *\d/.test(c))return!1;let p=0;for(const h of c.split(''))if((["(","["].includes(h)?++p:[")","]"].includes(h)&&--p)<0)break;return !p}