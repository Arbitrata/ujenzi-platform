const db = require("../config");
const bcrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const pick = require("lodash/pick");
const { isEmpty } = require("lodash");
const _ = require("lodash");
// const { v4: uuidv4 } = require('uuid');

module.exports = {
  signInHandler: async (req, res) => {
    const { email, password } = req.body;

    const results = await db.search("ujenzi.user", { email });

    if (isEmpty(results))
      return res
        .status(401)
        .json({ errored: true, error: "Account does not exist" });

    const validPassword = await bcrypt.compare(password, results.password_hash);

    if (!validPassword)
      return res
        .status(400)
        .json({ errored: true, error: "Wrong password, try again" });

    const response = pick(results, ["user_id", "email"]);

    sign({ response }, process.env.SECRET_KEY, (err, token) => {
      if (err)
        return res.status(500).json({ err, message: "Internal Server Error" });
      return res.status(200).json({ ...response, authorization_token: token });
    });
  },

  signUpHandler: async (req, res) => {
    const { fullname, email, phonenumber, password } = req.body;

    const results = await db.search("ujenzi.user", { email });
    if (!isEmpty(results))
      return res
        .status(401)
        .json({ errored: true, error: "Account Already exists Login" });

    const salt = await bcrypt.genSalt(15);
    const password_hash = await bcrypt.hash(password, salt);
    const user = await db.create("ujenzi.user", {
      full_name: fullname,
      email: email,
      phone_number: phonenumber,
      password_hash: password_hash,
    });

    sign(
      { user },
      process.env.SECRET_KEY,
      { expiresIn: 3 * 24 * 60 * 60 },
      (err, token) => {
        if (err)
          return res
            .status(500)
            .json({ err, message: "Internal Server Error" });
        res
          .status(200)
          .json({ user: user.user_id, authorization_token: token });
      }
    );
  },

  signOutHandler: () => {},
};
