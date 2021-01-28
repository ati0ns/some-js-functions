/**
 * @param {Date|number} date `new Date()` should be faster than `Date.now()`.
 * @param {string} str Available anchors: `{years}` `{months}` `{days}` `{hours}` `{minutes}` `{seconds}` `{milliseconds}`.
 * @example
 * toDate(new Date(), "Today is {y}/{m}/{d} at {h}h {mn}mn {s}s.")
 * // "Today is 2020/11/17 at 13h 38mn 28s."
 */
module.exports = (date, str) => {
    if (!(date instanceof Date)) date = new Date(Number(date))
    if (!str || !(date instanceof Date)) return null
    return str.replace(/({m(?:s|illiseconde?s?)})|({s(?:ec(?:onde?)?s?)?})|({m(?:n|in(?:ute)?s?)})|({h(?:(?:r|our|eure)s?)?})|({(?:d(?:ay)?|j(?:our)?)s?})|({m(?:ois|onths?)?})|({(?:y(?:ear)?|an(?:née)?)s?})/gi, (_, ...a) => a[0] ? date.getMilliseconds() : a[1] ? date.getSeconds() : a[2] ? date.getMinutes() : a[3] ? date.getHours() : a[4] ? date.getDate() : a[5] ? date.getMonth() + 1 : a[6] && date.getFullYear())
}