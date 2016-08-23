module.exports = (object, keys) => (
    keys.reduce((sum, key) => (
        object[key] ? sum + object[key] : sum
    ), 0)
)
