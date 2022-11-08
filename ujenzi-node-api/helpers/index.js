const { get } = require("lodash");


const tryCatch = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

const getReqBody = req => get(req, 'body', '');

module.exports = {
    tryCatch,
    getReqBody
}