const s={en:"[A-Z](?:[A-Za-z]*(?:-[A-Za-z]|(?: |: |; |, | – )?[A-Za-z]+)*)?(?:\\.\\.\\.|\\.|\\?|!|",fr:"[A-Z](?:[A-Za-z]*(?:-[A-Za-z]|(?: | : | ; |, | – )?[A-Za-z]+)*)?(?:\\.\\.\\.|\\.| \\?| !|"}
/**
 * Returns all the correct sentences of a text.
 * @param {string} str
 * @param {object} params
 * @param {boolean} params.verse
 * @param {str} params.lang Available languages are: `en` `fr`. Default is `en`.
 */
module.exports=(str,params)=>{if(typeof params!="object")params={};const verse=typeof params.verse=="boolean"?params.verse:!1,lang=Object.entries(s).find(e=>e[0]==params.lang);return str.match(RegExp(lang?lang[0]:s.en+(verse?"|$)":")"),"g"+(verse?"m":'')))}