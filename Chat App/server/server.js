const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Chat = require('./Models/chat');
const cors = require('cors');

app.use(cors());
app.use(express.json());

main()
.then( res => console.log('Connected Sucessfully to Database',))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ChatVerse');
}

app.listen( '5000' ,()=> {
    console.log('Listening on port 5000')
})

app.get('/', async (req, res) => {
    const Chats = await Chat.find();
    res.send(Chats);
})

