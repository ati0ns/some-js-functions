/**
 * @param {string} str String where to convert as many times as there are to milliseconds. Available anchors: `{days}` `{hours}` `{minutes}` `{seconds}` `{milliseconds}`.
 */
module.exports=str=>str.match(/(?:(-|\+)?\d+(?:e(-|\+)?\d+)?\s*[A-Za-z]+)+/g).map(m=>m.match(/(-|\+)?\d+(?:e(-|\+)?\d+)?\s*[A-Za-z]+/g).reduce((a,b)=>a+Number(b.match(/(-|\+)?\d+(?:e(-|\+)?\d+)?/)[0])*(/\d+\s*(d(ays?)?|j(ours?)?)/i.test(b)*864e5||/\d+\s*h((r|our|eure)s?)?/i.test(b)*36e5||/\d+\s*m(n|in(ute)?s?)/i.test(b)*6e4||/\d+\s*s(ec(onde?)?s?)?/i.test(b)*1e3||/\d+\s*m(s|illiseconde?s)/gi.test(b)),0))