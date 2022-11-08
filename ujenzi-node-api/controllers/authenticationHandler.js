const db = require("../config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pick = require("lodash/pick");
const { isEmpty } = require("lodash");
const _ = require("lodash");

module.exports = {
  signInHandler: async (req, res) => {
    const { email, password_hash } = req.body;

    const results = await db.search("ujenzi.user", { email });

    if (isEmpty(results))
      return res
        .status(401)
        .json({ errored: true, error: "Account does not exist" });

    const validPassword = await bcrypt.compare(
      password_hash,
      results.password_hash
    );

    if (!validPassword)
      return res.status(400).json({ errored: true, error: "Invalid Password" });

    const response = pick(results, ["user_id", "email"]);
    const token = await createToken(response);
    return res.status(200).json({ ...response.user_id, authorization_token: token });
  },

  signUpHandler: async (req, res) => {
    const { fullname, email, phonenumber, password_hash } = req.body;

    const salt = await bcrypt.genSalt(15);
    const password = await bcrypt.hash(password_hash, salt);
    const user = await db.create("ujenzi.user", {
      full_name: fullname,
      email: email,
      phone_number: phonenumber,
      password_hash: password,
    });
    const token = await createToken(user.user_id);
    res.status(201).json({ ...user.user_id, authorization_token: token, httpOnly: true, maxAge });
    // if (_.exists(user))
    //   return res
    //     .status(401)
    //     .json({ errored: true, error: "Account already  not exist" });
  },
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (user_id) => {
  return jwt.sign({ user_id }, process.env.SECRET_KEY, {
    expiresIn: maxAge,
  });
};
