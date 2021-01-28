/**
 * @param {string} str
 * @param {string} type
 * @param {object} options
 */
module.exports = (str, type, options) => {
    type = type.toLowerCase()

    switch (type) {
        case "spoiler":
            return str.match(/(?<!(?<!\\)\\(?:\\\\)*)\|(?<!(?<!\\)\\(?:\\\\)*)\|[^]+?(?<!(?<!\\)\\(?:\\\\)*)\|(?<!(?<!\\)\\(?:\\\\)*)\|/g).map(e => e.length - 4).reduce((a, b) => a + b)
        case "italic":
            return str.match(/(?<!(?<!\\)\\(?:\\\\)*)\*[^]+?(?<!(?<!\\)\\(?:\\\\)*)\*|(?<!(?<!\\)\\(?:\\\\)*)_[^]+?(?<!(?<!\\)\\(?:\\\\)*)_/g).map(e => e.length - 2).reduce((a, b) => a + b)
        case "bold":
            return str.match(/(?<!(?<!\\)\\(?:\\\\)*)\*(?<!(?<!\\)\\(?:\\\\)*)\*[^]+?(?<!(?<!\\)\\(?:\\\\)*)\*(?<!(?<!\\)\\(?:\\\\)*)\*/g).map(e => e.length - 4).reduce((a, b) => a + b)
        case "strikethrough":
            return str.match(/(?<!(?<!\\)\\(?:\\\\)*)~(?<!(?<!\\)\\(?:\\\\)*)~[^]+?(?<!(?<!\\)\\(?:\\\\)*)~(?<!(?<!\\)\\(?:\\\\)*)~/g).map(e => e.length - 4).reduce((a, b) => a + b)
        case "underline":
            return str.match(/(?<!(?<!\\)\\(?:\\\\)*)_(?<!(?<!\\)\\(?:\\\\)*)_[^]+?(?<!(?<!\\)\\(?:\\\\)*)_(?<!(?<!\\)\\(?:\\\\)*)_/g).map(e => e.length - 4).reduce((a, b) => a + b)
        case "codeblock":
            return str.match(/(?<!(?<!\\)\\(?:\\\\)*)`(?<!(?<!\\)\\(?:\\\\)*)`(?<!(?<!\\)\\(?:\\\\)*)`[^]+?(?<!(?<!\\)\\(?:\\\\)*)`(?<!(?<!\\)\\(?:\\\\)*)`(?<!(?<!\\)\\(?:\\\\)*)`/g).map(e => e.length - 6).reduce((a, b) => a + b)
        case "codeline":
            return str.match(/(?<!(?<!\\)\\(?:\\\\)*)`[^]+?(?<!(?<!\\)\\(?:\\\\)*)`/g).map(e => e.length - 2).reduce((a, b) => a + b)
        default:
            return 0
    }
}