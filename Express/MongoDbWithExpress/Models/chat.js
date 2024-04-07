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
        maxLength:50
    },
    created_at:{
        type:Date
    }
})

const Chat = mongoose.model('Chat',chatSchema);

module.exports = Chat;