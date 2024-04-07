const mongoose = require('mongoose');
const Chat = require('./Models/chat.js');

main()
.then(res => console.log('Connecion successfully to Database'))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ChatApp');
}

let allChats = [
    {from:'Zaid', to:'Zubair', msg:'Whatsup Bro', created_at: new Date()},
    {from:'Kaheel', to:'Zubair', msg:'Have to done the given work', created_at: new Date()},
    {from:'Saalim', to:'Kaheel', msg:'Lets play cricket today', created_at: new Date()},
    {from:'Areeb', to:'Saalim', msg:'Where are you bot let go some where', created_at: new Date()},
]

Chat.insertMany(allChats)
.then( res => console.log(res) )
.catch( err => console.log(err) )