const mongoose = require("mongoose");
const User = require("./models/user");
const servicepassport = require("./passport");
const jwt = require("jwt-simple");
const local = require("passport-local");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requiresignin = passport.authenticate("local", { session: false });

const secret = "k2enfoe4nfewf89ubwkeufkebfebuf";

function createtoken(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, secret);
}

module.exports = function(app) {
  app.get("/api/protected", requireAuth, (req, res) => {
    res.send("hey ya");
  });

  app.post("/api/signup", (req, res) => {
    if (!req.body.email || !req.body.password) {
      res.status(400).send({ error: "Please provide email and password" });
    }

    User.create(req.body, (err, user) => {
      if (err) {
        res.status(400).send({ error: "Please provide email and password" });
      }
      res.send({ token: createtoken(user) });
    });
  });

  app.post("/api/signin", requiresignin, (req, res) => {
    res.send({ token: createtoken(req.user) });
  });
};
