const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:String,
    email:{
        type:String,
        required:true
    },
    password:String,
    category:String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;