# checkif.js

This library aims to perform various checks in the javascript environment.

[![Build Status](https://travis-ci.com/joeltankam/checkif.js.svg?branch=master)](https://travis-ci.com/joeltankam/checkif.js) [![Codacy Badge](https://api.codacy.com/project/badge/Coverage/331aec6489ce4632a4ae702f0b13202b)](https://www.codacy.com/app/joel.tankam/checkif.js?utm_source=github.com&utm_medium=referral&utm_content=joeltankam/checkif.js&utm_campaign=Badge_Coverage) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/e8957c5c3d4841dcbb0ec1c4c86505da)](https://app.codacy.com/app/joel.tankam/checkif.js?utm_source=github.com&utm_medium=referral&utm_content=joeltankam/checkif.js&utm_campaign=Badge_Grade_Dashboard) [![slack checkif.js](https://img.shields.io/badge/slack-checkif.js-blue.svg)](https://ifjs.slack.com)

## Installation

`checkif.js` is distributed as a npm package.

```bash
npm install checkif.js
```

## Documentation

The library is constituted of a set of checkers to perform different verifications.

### `is`

```js
import { is } from 'checkif.js';
```

#### Types

This group of methods allows to verify _if_ a given value _is_ from a specific type.

##### `null(value)`

Check _if_ a given value _is_ `null`.

##### `undefined(value)`

Check _if_ a given value _is_ `undefined`.

##### `nan(value)`

Check _if_ a given value _is_ `NaN`. Same as `Number.isNaN`.

```js
is.nan(NaN); // true
is.nan(Number.NaN); // true
```

##### `array(value)`

Check _if_ a given value is an array. This method is the same as `Array.isArray`, if available.

```js
is.array([]); // true
is.array(new Array(0)); // true
```

##### `boolean(value)`

Check _if_ a given value _is_ a boolean.

```js
is.boolean(true); // true
is.boolean(new Boolean(0)); // true
```

##### `string(value)`

Check _if_ a given value _is_ a string.

```js
is.string(''); // true
is.string(String('')); // true
is.string(new String('')); // true
```

##### `char(value)`

Check _if_ a given value _is_ a char.

```js
is.char(' '); // true
is.char('1'); // true
is.char(1); // false
```

##### `date(value)`

Check _if_ a given value _is_ a date.

```js
is.date(new Date('November 23, 1998 03:24:00')); // true, my birthdate btw ;)
```

##### `number(value)`

Check _if_ a given value _is_ a number.

```js
is.number(Number(1)); // true
is.number(new Number(1)); // true
is.number(1); // false
```

##### `regexp(value)`

Check _if_ a given value _is_ a regular expression.

```js
is.regexp(\a\); // true
is.regexp(RegExp()); // true
is.regexp(new RegExp()); // true
```

##### `object(value)`

Check _if_ a given value _is_ an object.

```js
is.object({}); // true
is.object(String(1)); // true
is.object('1'); // false
```

##### `jsonObject(value)`

Check _if_ a given value _is_ a pure JSON object.

```js
is.jsonObject({}); // true
is.jsonObject({ value: 1 }); // true
is.jsonObject(new Date()); // false
```

##### `function(value)`

Check _if_ a given value _is_ a function.

```js
is.function(function () { }); // true
is.function(x => x); // true
is.function(new Function('x', 'return x')); // true
```

##### `error(value)`

Check _if_ a given value _is_ an error.

```js
is.error(Error('Fatal error')); // true
is.error(new Error('Nothing works anymore')); // true
```

##### `domNode(value)`

Check _if_ a given value _is_ a DOM node.

```js
// Browser
is.domNode(window.document.body); // true
// Node.js
let dom = new JSDOM(`<html !DOCTYPE><body></body></html>`);
is.domNode(dom.window.document.body); // true
```

##### `windowObject(value)`

Check _if_ a given value _is_ a window object.

```js
// Browser
is.windowObject(window); // true
// Node.js
let dom = new JSDOM(`<html !DOCTYPE></html>`)
is.windowObject(dom.window); // true
```

#### RegExp

This group of methods allows to verify _if_ a given string _is_ from a specific known type of value.
_To be implemented_

#### String

This group of methods allows to verify _if_ a given string _is_ a from a specific format.
_To be implemented_

#### Arithemetic

This group of methods allows to verify _if_ a given number _is_ a from a specific class of numbers.
_To be implemented_

#### Environment

This group of methods allows to verify _if_ the current environment _is_ a specific environment.
_To be implemented_

#### Time

This group of methods allows to verify _if_ a date _is_ a specific kind.
_To be implemented_

### `all`

```js
import { all } from 'checkif.js';
```

This method verifies _if_ _all_ elements in a given enumerable (array or object) match a specific value or function.

#### Array

```js
all([0, 0, 0, 0], 0); // true
all([2, 4, 6, 8], x => x%2 === 0); // true

all([0, 1, 2, 3], 1); // false
```

#### Object

```js
all({ x: 1, y: 1 }, 1); // true
let a = {};
all({ x: a, y: a }, x => x === a); // true

all({ x: 0, y: new Number(0) }, function(x){ return x === 0; }); // false
```

Feel free to build complex logic for your checks.

```js
import { all, is } from 'checkif.js';
all({ x: ['a','b'], y: ['a', 'c'] }, x => all(x, is.char)); // true
```

### `any`

```js
import { any } from 'checkif.js';
```

_To be implemented_

## Contributing

Any help is wanted and welcome. You can check out our github [issues](https://github.com/joeltankam/checkif.js/issues) and [projects](https://github.com/joeltankam/checkif.js/projects) or our [slack](https://ifjs.slack.com) page.

Please follow our [contributing guidelines](https://github.com/joeltankam/checkif.js/blob/master/CONTRIBUTING.md).
