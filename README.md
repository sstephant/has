# has

Simple wrapper for Object.hasOwnProperty function

Installation:
-------------
```
npm install has --save
```

Usage:
------
```
const has = require('has');

const obj = { prop: 'MyProp' };

const hasProp = has(obj, 'prop')) // true
const hasOtherProp = has(obj, 'otherProp')) // false
```
