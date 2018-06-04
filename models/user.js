const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const { Schema } = mongoose;

const Userschema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

Userschema.pre("save", function(next) {
  const user = this;
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });
  });
});

Userschema.methods.comparePassword =function(candidate, callback) {
  bcrypt.compare(candidate, this.password, (err, isMatch)=> {
    if(err){ console.log(isMatch)
      return callback(err);}

    callback(null,isMatch);
  })
}

module.exports = mongoose.model("User", Userschema);
