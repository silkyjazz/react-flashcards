const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");
const deck = require("./Deck");

// TODO: 
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxLength: 14,
  },
  deck: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Deck',
    },
  ],
});

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
