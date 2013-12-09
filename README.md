# resource-error
error classes relating to resources, aligned with http codes

The intention is to have generic error classes which describe some sort of
resource or data entity, and to align with (but not fully replicate) http
error semantics.

## usage
```js
var resourceError = require('resource-error')

var userId = 0
throw new resourceError.NotFound('User ' + userId)
```

Supports the features of `[typedError](https://npm.im/typederror)`

## Error types

- `resourceError.NotFound`
code: 404

- `resourceError.NotAuthorized`
code: 403

- `resourceError.Invalid`
code: 400

- `resourceError.Err`
code: 500


## installation

    $ npm install resource-errors


## running the tests

Current there are no tests. The underlying module, `[typedError](https://npm.im/typederror)`, has tests.

## contributors

- jden <jason@denizac.org>


## license

MIT. (c) MMXIII jden <jason@denizac.org>. See LICENSE.md
