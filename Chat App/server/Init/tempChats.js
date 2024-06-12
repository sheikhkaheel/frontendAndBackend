const mongoose = require('mongoose');
const Chat = require('../Models/chat');

main()
.then( res => console.log('Connected Sucessfully to Database',res))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ChatVerse');
}

const chats = [
    { from:'Saalim', to: 'Yasir', msg: 'How Are You', createdOn:Date.now() },
    { from:'Isa', to: 'Sahil', msg: 'Whatsup, Bro', createdOn:Date.now() },
    { from:'Haziq', to: 'Faiz', msg: 'Where are you currently', createdOn:Date.now() },
]

Chat.insertMany(chats)
.then( res => console.log(res))
.catch(err => console.error(err));