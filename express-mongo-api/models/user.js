import mongoose from 'mongoose';
const { Schema } = mongoose;
const userchemaShape = new Schema({
    name: String,
    email:String
})
const users = mongoose.model("User", userchemaShape);
export default users