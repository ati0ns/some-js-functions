/**
 * @param {string} txt
 * @param {object} params
 * @param  {...string} beacons
 * @returns {Promise<object>}
 * @async
 */
module.exports = async(txt, params = { caseSensitive: !1, eToFetch: { type: "word", amount: 1 } }, ...beacons) => {
    if (!params.caseSensitive) params.caseSensitive = !1
    if (!params.eToFetch) params.eToFetch = { type: "word", amount: 1 }
    if (!params.eToFetch.type) params.eToFetch.type = "word"
    if (!params.eToFetch.amount) params.eToFetch.amount = 1
    const { caseSensitive, eToFetch } = params

    const saveTxt = Array.isArray(txt) ? txt.join(" ") : txt
    if (!caseSensitive) txt = txt.toLowerCase()
    if (typeof txt == "string") txt = txt.split(/\s+/)
    if (!beacons[1]) beacons = beacons.flat()
    if (!caseSensitive) beacons.map(b => b.toLowerCase())
    if (!Array.isArray(txt) || !Array.isArray(beacons) || !beacons[0] || !["word", "char"].includes(eToFetch.type)) return null

    const res = []
    let lastI = 0
    const lim = txt.length
    for (let i = 0; i < lim; i++) {
        if (beacons.includes(txt[i])) {
            const obj = { name: txt[i], indexes: { array: i, text: saveTxt.indexOf(txt[i], lastI) } }
            lastI = saveTxt.indexOf(txt[i], lastI + 1)
            obj.content = (eToFetch.type == "word" ? txt : saveTxt.split('').slice(txt[i].length)).slice(eToFetch.type == "word" ? i + 1 : lastI, (eToFetch.type == "word" ? i : lastI) + 1 + eToFetch.amount)
            res.push(obj)
        }
    }
    return res
}