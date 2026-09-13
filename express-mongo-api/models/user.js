import mongoose from 'mongoose';
// const { Schema } = mongoose;
// const userchemaShape = new Schema({
//     name: String,
//     email:String
// })
// const users = mongoose.model("User", userchemaShape);

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password:String
})
// Hash password before saving means did not update
userSchema.pre('save', async function (next) {
  //the password was not modified
  if (!this.isModified("password")) return next(); //Stop this middleware and continue saving.
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
// Method to compare password
userSchema.method.comparePassword = function (inputPassword) {
    return bcrypt.compare(inputPassword,this.password)
}
const Users= mongoose.model('Users',userSchema)
export default Users;