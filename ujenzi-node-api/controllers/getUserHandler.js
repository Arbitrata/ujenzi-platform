const db = require("../config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pick = require("lodash/pick");
const { isEmpty } = require("lodash");


module.exports = {
  getBuyerHandler: async (req, res) => {
    const { user_id } = req.body;
    
    const user = await db.search('ujenzi.role', { title: "buyer" });

    const buyers = await db.search('ujenzi.user', { role_id });

    res.status(200).json({ buyers });
  },
};
