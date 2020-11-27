/**
 * Checks if a calcul is correct with its operations and parenthesis.
 * @param {string} calc
 */
module.exports = calc => {
    if (typeof calc != "string") return;

    if (/\(\)|\[\]|[/+-]{2}|\*\*\/|(?<![A-Za-z\d ]|\)|\])\/|(?<![A-Za-z\d ]|\)|\]|(?<!\*)\*)\*|(?<![A-Za-z\d ]|\)|\]|\*\*?)[+-]|(\)|\]) *[A-Za-z\d]|(\d|[A-Za-z]) +(\d|[A-Za-z])|[A-Za-z] *\d/.test(calc)) return !1;

    let parenthesis = 0;
    for (const char of calc.split(''))
        if ((["(", "["].includes(char) ? ++parenthesis : [")", "]"].includes(char) && --parenthesis) < 0) break;

    return !parenthesis;
};