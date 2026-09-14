import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password:String
})
// Hash password before saving means did not update
// Hash password before saving
userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return;
    }

    const salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(this.password, salt);
});

// Method to compare password
userSchema.methods.comparePassword = function (inputPassword) {
    return bcrypt.compare(inputPassword,this.password)
}
const Users= mongoose.model('User',userSchema)
export default Users;