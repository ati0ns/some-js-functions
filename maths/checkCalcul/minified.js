/**
 * Checks if a calcul is correct with its operations and parenthesis.
 * @param {string} calc
 */
module.exports=calc=>{const c=calc;if(typeof c!="string")return;if(/\(\)|\[\]|[/+-]{2}|\*\*\/|(?<![A-Za-z\d ]|\)|\])\/|(?<![A-Za-z\d ]|\)|\]|(?<!\*)\*)\*|(?<![A-Za-z\d ]|\)|\]|\*\*?)[+-]|(\)|\]) *[A-Za-z\d]|(\d|[A-Za-z]) +(\d|[A-Za-z])|[A-Za-z] *\d/.test(c))return!1;let p=0;for(const h of c.split(''))if((["(","["].includes(h)?++p:[")","]"].includes(h)&&--p)<0)break;return!p}