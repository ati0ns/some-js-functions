/**
 * Checks if a calcul is correct with its operations and parenthesis.
 * @param {string} calc
 */
module.exports = calc => {
    if (!calc) return;

    if (/\(\)|\[\]|[/+-]{2}|\*\*\/|(?<![A-z\d ]|\)|\])\/|(?<![A-z\d ]|\)|\]|(?<!\*)\*)\*|(?<![A-z\d ]|\)|\]|\*\*?)[+-]|(\)|\]) *[A-z\d]|(\d|[A-z]) +(\d|[A-z])|[A-z] *\d/.test(calc)) return !1;

    let parenthesis = 0;
    for (const char of calc.split(''))
        if ((["(", "["].includes(char) ? ++parenthesis : [")", "]"].includes(char) && --parenthesis) < 0) break;

    return !parenthesis;
};