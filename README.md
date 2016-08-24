# Sums values in an object

## Usage
First install:
```
npm install --save
```

Then use it:
```
const sumValuesInObject = require('sum-values-in-object')
```

If you have an object like this:

```
const data = {
      acorns: 1,
      'Crumble cakes': 2,
      Dizzlepix: 1000
    }
```

Find the sum of the values associated with a set of keys, like this:

```
sumValuesInObject(data, ['acorns', 'Crumble cakes', 'Dizzlepix']) // 1003
```
