function redo(thisArg, fn, cond) {
    if (cond(thisArg)) {
        thisArg = fn(thisArg)
        return redo(thisArg, fn, cond)
    }

    return thisArg
}

module.exports = redo