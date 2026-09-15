import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
const { Schema } = mongoose;
const userchemaShape = new Schema({
    name: { type: String ,required:true},
    email: { type: String, required: true, unique: true },
    password: String

})
userchemaShape.pre('save',async function (next) {
    if (!this.isModified(this.password)) return next();
    const salt = await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt)
})
const users = mongoose.model("User", userchemaShape);
export default users