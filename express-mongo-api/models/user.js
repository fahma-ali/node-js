const mongoos = require('mongoose');
const { Schema } = mongoos;
const userchemaShape = new Schema({
    name: String,
    email:String
})
module.exports = mongoos.model("User", userchemaShape);