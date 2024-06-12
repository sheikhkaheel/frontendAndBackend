const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from:{
        type:String,
        required: true
    },
    to:{
        type:String,
        required: true
    },
    msg:{
        type:String,
        reqired:true
    },
    createdOn:{
        type:Date,
        default:Date.now(),
    },
    updatedOn:{
        type:Date,
    }
});

const Chat = mongoose.model('Chat',chatSchema);

module.exports = Chat;