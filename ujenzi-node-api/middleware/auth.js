const { verify } = require("jsonwebtoken");

module.exports = {
  requireAuth: (req, res, next) => {
    const token = req.localStorage.token;

    if (token) {
     verify(token, process.env.SECRET_KEY, (err, decodedToken)=> {
        if (err) {
            console.log(err.message);
            res.redirect('/signin')
        } else {
            console.log(decodedToken);
            next();
        }
     });

    }else{
        res.redirect('/signup')
    }
    

    // if (!token)
    //   return res
    //     .status(401)
    //     .json({
    //       errored: true,
    //       error: "Access denied. No Authorization provided",
    //     });

    // try {
    //   const data = verify(token, process.env.SECRET_KEY);
    //   req.user = data;
    //   next();
    // } catch (error) {
    //   res.status(400).json({ message: "Invalid access token" });
    // }
  },
};
