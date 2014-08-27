var typedError = require('typederror');

module.exports.Invalid = typedError('InvalidError', {code: 400});
module.exports.Unauthorized = typedError('UnauthorizedError', {code: 401});
module.exports.Forbidden = typedError('ForbiddenError', {code: 403});
module.exports.NotFound = typedError('NotFoundError', {code: 404});
module.exports.Conflict = typedError('ConflictError', {code: 409});
module.exports.Gone = typedError('GoneError', {code: 410});
module.exports.Err = typedError('Error', {code: 500});

// for back-compat
module.exports.NotAuthorized = typedError('NotAuthorizedError', {code: 403});
