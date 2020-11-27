/**
 * @param {Date|number} date `new Date()` should be faster than `Date.now()`.
 * @param {string} str Available anchors: `{years}` `{months}` `{days}` `{hours}` `{minutes}` `{seconds}` `{milliseconds}`.
 * @example
 * toDate(new Date(), "Today is {y}/{m}/{d} at {h}h {mn}mn {s}s.")
 * // "Today is 2020/11/17 at 13h 38mn 28s."
 */
module.exports=(date,str)=>{const d=date,s=str;if(!(d instanceof Date))d=new Date(Number(d));if(!s||!(d instanceof Date))return null;return s.replace(/({m(?:s|illiseconde?s?)})|({s(?:ec(?:onde?)?s?)?})|({m(?:n|in(?:ute)?s?)})|({h(?:(?:r|our|eure)s?)?})|({(?:d(?:ay)?|j(?:our)?)s?})|({m(?:ois|onths?)?})|({(?:y(?:ear)?|an(?:née)?)s?})/gi,(_,...a)=>a[0]?d.getMilliseconds():a[1]?d.getSeconds():a[2]?d.getMinutes():a[3]?d.getHours():a[4]?d.getDate():a[5]?d.getMonth()+1:a[6]&&d.getFullYear())}