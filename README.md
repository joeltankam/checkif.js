# checkif.js

This library aims to perform various checks in the javascript environment.

[![Build Status](https://travis-ci.com/joeltankam/checkif.js.svg?branch=master)](https://travis-ci.com/joeltankam/checkif.js) [![Codacy Badge](https://api.codacy.com/project/badge/Coverage/331aec6489ce4632a4ae702f0b13202b)](https://www.codacy.com/app/joel.tankam/checkif.js?utm_source=github.com&utm_medium=referral&utm_content=joeltankam/checkif.js&utm_campaign=Badge_Coverage) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/e8957c5c3d4841dcbb0ec1c4c86505da)](https://app.codacy.com/app/joel.tankam/checkif.js?utm_source=github.com&utm_medium=referral&utm_content=joeltankam/checkif.js&utm_campaign=Badge_Grade_Dashboard) [![npm version](https://badge.fury.io/js/checkif.js.svg)](https://badge.fury.io/js/checkif.js) [![slack checkif.js](https://img.shields.io/badge/slack-checkif.js-blue.svg)](https://ifjs.slack.com)

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

Checks _if_ a given value _is_ `null`.

##### `undefined(value)`

Alias `und(value)`

Checks _if_ a given value _is_ `undefined`.

##### `nan(value)`

Checks _if_ a given value _is_ `NaN`. Same as `Number.isNaN`.

```js
is.nan(NaN); // true
is.nan(Number.NaN); // true
```

##### `array(value)`

Alias `arr(value)`

Checks _if_ a given value is an array. This method is the same as `Array.isArray`, if available.

```js
is.array([]); // true
is.array(new Array(0)); // true
```

##### `boolean(value)`

Alias `bool(value)`

Checks _if_ a given value _is_ a boolean.

```js
is.boolean(true); // true
is.boolean(new Boolean(0)); // true
```

##### `string(value)`

Alias `str(value)`

Checks _if_ a given value _is_ a string.

```js
is.string(''); // true
is.string(String('')); // true
is.string(new String('')); // true
```

##### `char(value)`

Checks _if_ a given value _is_ a char.

```js
is.char(' '); // true
is.char('1'); // true
is.char(1); // false
```

##### `date(value)`

Checks _if_ a given value _is_ a date.

```js
is.date(new Date('November 23, 1998 03:24:00')); // true, my birthdate btw ;)
```

##### `number(value)`

Alias `num(value)`

Checks _if_ a given value _is_ a number.

```js
is.number(Number(1)); // true
is.number(new Number(1)); // true
is.number(1); // true
```

##### `regexp(value)`

Alias `reg(value)`

Checks _if_ a given value _is_ a regular expression.

```js
is.regexp(\a\); // true
is.regexp(RegExp()); // true
is.regexp(new RegExp()); // true
```

##### `object(value)`

Alias `obj(value)`

Checks _if_ a given value _is_ an object.

```js
is.object({}); // true
is.object(String(1)); // true
is.object('1'); // false
```

##### `pureObject(value)`

Alias `pure(value)`

Checks _if_ a given value _is_ a pure JSON object.

```js
is.pureObject({}); // true
is.pureObject({ value: 1 }); // true
is.pureObject(new Date()); // false
```

##### `function(value)`

Alias `func(value)`

Checks _if_ a given value _is_ a function.

```js
is.function(function () { }); // true
is.function(x => x); // true
is.function(new Function('x', 'return x')); // true
```

##### `error(value)`

Alias `err(value)`

Checks _if_ a given value _is_ an error.

```js
is.error(Error('Fatal error')); // true
is.error(new Error('Nothing works anymore')); // true
```

##### `domNode(value)`

Alias `dom(value)`

Checks _if_ a given value _is_ a DOM node.

```js
// Browser
is.domNode(window.document.body); // true
// Node.js
let dom = new JSDOM(`<html !DOCTYPE><body></body></html>`);
is.domNode(dom.window.document.body); // true
```

##### `windowObject(value)`

Alias `window(value)`

Checks _if_ a given value _is_ a window object.

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

##### `lowerCase(value)`

Check _if_ a given value _is_ a lower case string.

```js
is.lowerCase('abc'); // true
is.lowerCase('abc 123'); // true
is.lowerCase('ABC'); // false
```

##### `upperCase(value)`

Check _if_ a given value _is_ an upper case string.

```js
is.upperCase('ABC'); // true
is.upperCase('ABC 123'); // true
is.upperCase('abc'); // false
```

#### Arithemetic

This group of methods allows to verify _if_ a given number _is_ a from a specific class of numbers.

##### `even(value)`

Checks _if_ a given value _is_ even.

```js
is.even(10); // true
is.even(11); // false
```

##### `odd(value)`

Checks _if_ a given value _is_ odd.

```js
is.odd(9); // true
is.odd(10); // false
```

#### Environment

This group of methods allows to verify _if_ the current environment _is_ a specific environment.

_To be implemented_

#### Time

This group of methods allows to verify _if_ a date _is_ a specific kind.

_To be implemented_

### `all(enumerable, matcher, strict = false)`

```js
import { all } from 'checkif.js';
```

This method verifies _if_ _all_ elements in a given enumerable (array or object) match a specific value or function.

#### `all` on arrays

```js
all([0, 0, 0, 0], 0); // true
all([2, 4, 6, 8], x => x%2 === 0); // true

all([0, 1, 2, 3], 1); // false
```

#### `all` on objects

```js
all({ x: 1, y: 1 }, 1); // true
let a = {};
all({ x: a, y: a }, x => x === a); // true

all({ x: 0, y: new Number(0) }, function(x){ return x === 0; }); // false
```

#### Strict mode

The second parameter of `all` is automatically resolved as a matcher function when it's a function. But you may want to check if the values are exactly equal to the function (as a value). In this case, you should use the _strict mode_ by setting the 3rd parameter to `true` (default `false`).

```js
import { all } from 'checkif.js';

let _function = function (x) { ... };
all({ x: _function, y: _function }, _function, true); // true
```

Feel free to build complex logic for your checks.

```js
import { all, is } from 'checkif.js';
all({ x: ['a', 'b'], y: ['a', 'c'] }, x => all(x, is.char)); // true
```

### `any(enumerable, matcher, strict = false)`

This method verifies _if_ _any_ element in a given enumerable (array or object) matches a specific value or function.

```js
import { any } from 'checkif.js';

any([0,1,2,3], 2); // true
any([0,1,2,3], x => x === 0); // true
any({ x : 1, y : 0}, x => x === 1); // true

any([0, 1, 2, 3], 1); // false
any({ x : 1, y : 1}, 2); // false
any([0,1,2,3], x => x === 5); //false
```

`any` also supports _strict mode_.

### `atLeast(enumerable, count, matcher, strict = false)`

Alias `atl(enumerable, count, matcher, strict = false)`

This method verifies _if_ _at least_ a number of elements in a given enumerable (array or object) match a specific value or function.

```js
import { atLeast } from 'checkif.js';

atLeast([1,1,2,3], 2, 1); // true
atLeast([0,0,2,0], 3, x => x === 0); // true
atLeast({ x : 1, y : 0}, 1, x => x === 1); // true

atLeast([0, 1, 2, 3], 2, 1); // false
atLeast({ x : 1, y : 1}, 3, 2); // false
atLeast([0,1,2,3], 1, x => x === 5); //false
```

`atLeast` also supports _strict mode_.

### `atMost(enumerable, count, matcher, strict = false)`

Alias `atm(enumerable, count, matcher, strict = false)`

This method verifies _if_ _at most_ a number of elements in a given enumerable (array or object) match a specific value or function.

```js
import { atMost } from 'checkif.js';

atMost([0, 0, 1, 2], 2, 0); // true
atMost([true, true, true, false], 3, x => x === true); // true
atMost({ x: a, y: a }, 3, x => x === a); // true

atMost([0, 0, 1, 1], 1, 0); // false
atMost({ x: 1, y: 0 }, 0, 1); // false
let _function = function () { return true };
atMost({ x: _function, y: _function }, 1, _function); // false
```

`atMost` also supports _strict mode_.

## Contributing

Any help is wanted and welcome. You can check out our github [issues](https://github.com/joeltankam/checkif.js/issues) and [projects](https://github.com/joeltankam/checkif.js/projects) or our [slack](https://ifjs.slack.com) page.

Please follow our [contributing guidelines](https://github.com/joeltankam/checkif.js/blob/master/CONTRIBUTING.md).
