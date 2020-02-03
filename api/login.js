const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./Models/user.model");

// CONNECT TO MONGODB
mongoose.connect(
  "mongodb+srv://alef:hello123@cluster0-2yq8x.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  },
  err => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);

module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  User.findOne({ username: 'ion' })

    .then(user => {
      // user with this email not found? => error
      if (!user) {
        res.status(400).json( "invalid username or password" );
      }

      // compare passwords using bcrypt.compare() function
      bcrypt.compare('123456789', user.password).then(success => {
        // user password does not match password from login form? => error
        if (!success) {
          res.status(400).json({ err: "invalid username or password" });
        }
        // create JWT token by signing
        let secret = "top-secret";
        let token = jwt.sign(
          { aud: "iPhone-App", username: user.username }, // WHAT data to sign
          secret //, // signing key
          // { expiresIn: "1h" } // expiry time
        );

        // return token
        res.json({token}); // => same as: { "token": token }
      });
    })
    .catch(err => res.status(400).json("err: " + err));
};
