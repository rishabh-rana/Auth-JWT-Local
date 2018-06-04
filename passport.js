const passport = require("passport");
const User = require("./models/user");
const jwtstrat = require("passport-jwt").Strategy;
const extractjwt = require("passport-jwt").ExtractJwt;

const local = require("passport-local");
const secret = "k2enfoe4nfewf89ubwkeufkebfebuf";


const locallogin = new local({usernameField : 'email'}, (email,password,done)=> {
  User.findOne({email:email}, (err,user)=> {
    if(err){return done(err,false)}

    if(!user){return done(null,false)}

    user.comparePassword(password,(err, isMatch)=> {
      if(err){ console.log("error here");
        return done(err);}
      if(!isMatch){return done(null,false);}

      return done(null,user);
    })

  })
})

const jwtoptions = {
  jwtFromRequest: extractjwt.fromHeader("authorization"),
  secretOrKey: secret
};

const jwtLogin = new jwtstrat(jwtoptions, function(payload, done) {
  User.findById(payload.sub, (err, user) => {
    if (err) {
      return done(err, false);
    }

    if (user) {
      return done(null, user);
    }

    return done(null, false);
  });
});

passport.use(jwtLogin);
passport.use(locallogin);
