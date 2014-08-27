var typedError = require('typederror');

module.exports.NotFound = typedError('NotFoundError', {code: 404});
module.exports.Invalid = typedError('InvalidError', {code: 400});
module.exports.Err = typedError('Error', {code: 500});

// for back-compat
module.exports.NotAuthorized = typedError('NotAuthorizedError', {code: 403});
