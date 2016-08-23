# Sums values in an object

If you have an object like this:

```
const data = {
      acorns: 1,
      'Crumble cakes': 2,
      Dizzlepix: 1000,
    }
```

Find the sum of the values associated with a set of keys, like this:

```
sum(data, ['acorns', 'Crumble cakes', 'Dizzlepix']) // 1003
```
