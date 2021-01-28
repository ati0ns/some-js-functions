module.exports = str => str.match(/([a-z0-9àáâãäåçèéêëìíîïñòóôõöøßùúûüÿæœ(][a-z0-9àáâãäåçèéêëìíîïñòóôõöøßùúûüÿæœ')-]*[a-z0-9àáâãäåçèéêëìíîïñòóôõöøßùúûüÿæœ]? *)+/gi)
    .flatMap(e => {
        const i = e.match(/\b(?:et|que|dont)\b/).index
        return [e.slice(0, i), e.slice(i)]
    })