import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: String,

  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  profilePic: {
    type: String,
    default: "",
  },
});

userSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, (err, hashedPassword) => {
      if (err) {
        return next(err);
      }

      user.password = hashedPassword;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (inputPassword) {
  return bcrypt.compare(inputPassword, this.password);
};

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
