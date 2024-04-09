const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from:{
        type: 'string',
        required: true,
    },
    to:{
        type: 'string',
        required:true,
    },
    msg:{
        type: 'string',
        required:true,
        maxLength:60
    },
    created_at:{
        type:Date
    },
    updated_at:{
        type:Date,
        default:new Date().toString().split(" ").slice(0,4)
    }
})

const Chat = mongoose.model('Chat',chatSchema);

module.exports = Chat;