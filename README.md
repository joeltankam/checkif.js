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

* [is](#is)
  * [Types](#types)
  * [RegExp](#regexp)
  * [String](#string)
  * [Arithmetic](#arithmetic)
  * [Environment](#environment)
  * [Time](#time)
* [all](#all)
* [any](#any)
* [has](#has)
* [hasOnly](#hasonly)
* [atLeast](#atleast)
* [atMost](#atmost)
* [hasAtLeast](#hasatleast)
* [hasAtMost](#hasatmost)

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

##### `nullable(value)`

Checks _if_ a given value _is_ `null` or `undefined`.

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

##### `email(value)`
Check _if_ a given string _is_ an email. This verification is done according to [RFC5322](https://tools.ietf.org/html/rfc5322#section-3.2.3) official standard.

```js
is.email('simple@example.com') // true
is.email('very.common@example.com') // true
is.email('disposable.style.email.with+symbol@example.com') // true
is.email('other.email-with-hyphen@example.com') // true
is.email('fully-qualified-domain@example.com') // true
is.email('user.name+tag+sorting@example.com') // true
is.email('x@example.com') // true
is.email('example-indeed@strange-example.com') // true
is.email('example@s.example') // true
is.email('" "@example.org') // true
is.email('"john..doe"@example.com') // true
is.email('example.with.ip@[192.168.2.1]') // true
is.email('"with(comment)@example.com') // true
is.email('"with@(comment)example.com') // true

is.email('Abc.example.com') // false, no @ character
is.email('@example.com') // false, no local part
is.email('A@b@c@example.com') // false, only one @ is allowed outside quotation marks
is.email('a"b(c)d,e:f;g<h>i[j\k]l@example.com') // false, none of the special characters in this local-part are allowed outside quotation marks
is.email('just"not"right@example.com') // false, quoted strings must be dot separated or the only element making up the local-part
is.email('this is"not\allowed@example.com') // false, spaces, quotes, and backslashes may only exist when within quoted strings and preceded by a backslash
is.email('this\ still\"not\\allowed@example.com') // false, even if escaped (preceded by a backslash), spaces, quotes, and backslashes must still be contained by quotes
is.email('1234567890123456789012345678901234567890123456789012345678901234+x@example.com') // false, local part is longer than 64 characters
is.email('john..doe@example.com') // false, double dot before @
is.email('john.doe@example..com') // false, double dot after @
```

#### String

This group of methods allows to verify _if_ a given string _is_ a from a specific format.

##### `lowerCase(value)`

Check _if_ a given string _is_ lower case.

```js
is.lowerCase('abc'); // true
is.lowerCase('abc 123'); // true
is.lowerCase('ABC'); // false
```

##### `upperCase(value)`

Check _if_ a given string _is_ upper case.

```js
is.upperCase('ABC'); // true
is.upperCase('ABC 123'); // true
is.upperCase('abc'); // false
```

#### Arithmetic

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

##### `integer(value)`

Alias `int(value)`

Checks _if_ a given value _is_ an integer.

```js
is.integer(12); // true
is.integer(10.0); // true
is.integer(3.14); // false
is.integer(Number.MIN_VALUE); // false
is.integer(Infinity); // false
is.integer('6');// false
```

#### Environment

This group of methods allows to verify _if_ the current environment _is_ a specific environment.

_To be implemented_

#### Time

This group of methods allows to verify _if_ a date _is_ a specific kind.

##### `past(value)`

Checks _if_ a given value _is_ a Date object in the past.

```js
is.past(new Date(0)); // true

let pastDate = new Date();
pastDate.setUTCFullYear(pastDate.getUTCFullYear() - 1);
is.past(pastDate); // true

let futureDate = new Date();
futureDate.setUTCFullYear(futureDate.getUTCFullYear() + 1);
is.past(futureDate); // false
```

##### `future(value)`

Checks _if_ a given value _is_ a Date object in the future.

```js
let futureDate = new Date();
futureDate.setUTCFullYear(futureDate.getUTCFullYear() + 1);
is.future(futureDate); // true

is.future(new Date(0)); // false

let pastDate = new Date();
pastDate.setUTCFullYear(pastDate.getUTCFullYear() - 1);
is.future(pastDate); // false
```

##### `today(value)`

Checks _if_ a given value _is_ a Date object set today.

```js
let date = new Date();
date.setUTCHours(12);
date.setUTCMinutes(30);

is.today(date); // true
is.today(new Date()); // true
is.today(new Date(0)); // false

let pastDate = new Date();
pastDate.setUTCFullYear(pastDate.getUTCFullYear() - 1);
is.today(pastDate); // false

let futureDate = new Date();
futureDate.setUTCFullYear(futureDate.getUTCFullYear() + 1);
is.today(futureDate); // false
```

### `all`

`all(enumerable, matcher, strict = false)`

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

### `any`

`any(enumerable, matcher, strict = false)`

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

### `has`

This group of methods allows to verify _if_ a given enumerable (array or object) _has_ an element verifying a specific condition. This checker contains the same methods as `is`. In fact, `has.method(array)` is equivalent to `any(array, is.method)`.

```js
import { any } from 'checkif.js';

has.uppercase(['abc', 'Abc', 'ABC']); // true
has.even({ x : 1, y : 2, z : 3}); // true
has.function({ x : function(){}}); // true

has.nan([0, 1, 2, 3]); // false
has.integer([1.2, 1.3]); // false
has.null([]); // false
```

### `hasOnly`

This group of methods allows to verify _if_ a given enumerable (array or object) _has only_ elements verifying a specific condition. This checker contains the same methods as `is`.

`hasOnly.method(array)` is equivalent to `all(array, is.method)`.

```js
import { any } from 'checkif.js';

hasOnly.lowercase(['abc', 'def', 'ghi']); // true
hasOnly.integer({ x : 1, y : 2, z : 3}); // true
hasOnly.function({ x : function(){}, y : x => x}); // true

hasOnly.null([null, 1, 2, 3]); // false
hasOnly.odd([1, 2, 3]); // false
```

### `atLeast`

`atLeast(enumerable, count, matcher, strict = false)`

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

### `atMost`

`atMost(enumerable, count, matcher, strict = false)`

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

### `hasAtLeast`

`hasAtLeast(count)`

This group of methods allows to verify _if_ a given enumerable (array or object) _has at least_ a number of elements verifying a specific condition from `is`.
`hasAtLeast(count).method(enumerable)` is equivalent to `atLeast(enumerable, count, is.method)`.

### `hasAtMost`

`hasAtMost(count)`

This group of methods allows to verify _if_ a given enumerable (array or object) _has at most_ a number of elements verifying a specific condition from `is`.
`hasAtMost(count).method(enumerable)` is equivalent to `atMost(enumerable, count, is.method)`.

Keep in mind that using the `has*` notation is less performant than using the equivalent `atLeast` or `atMost` function. **Everytime** `has*(count)` is called, the resulting functions are regenerated from `is`.

## Contributing

Any help is wanted and welcome. You can check out our github [issues](https://github.com/joeltankam/checkif.js/issues) and [projects](https://github.com/joeltankam/checkif.js/projects) or our [slack](https://ifjs.slack.com) page.

Please follow our [contributing guidelines](https://github.com/joeltankam/checkif.js/blob/master/CONTRIBUTING.md).
