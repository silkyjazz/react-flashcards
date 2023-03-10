const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");

// TODO: 
const userSchema = new Schema({});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// create an instance of user schema
const User = mongoose.model("User", userSchema);

module.exports = User;
