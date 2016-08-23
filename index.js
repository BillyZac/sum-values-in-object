module.exports = (object, keys) => (
    keys.reduce((sum, key) => (
        sum + object[key]
    ), 0)
)
