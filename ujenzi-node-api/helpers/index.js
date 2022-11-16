const { get } = require("lodash");


const tryCatch = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

const getReqBody = req => get(req, 'body', '');

const maxAge = 3 * 24 * 60 * 60;
const createToken = (user_id) => {
  return jwt.sign({ user_id }, process.env.SECRET_KEY, {
    expiresIn: maxAge,
  });
};

module.exports = {
    tryCatch,
    getReqBody,
    createToken
}