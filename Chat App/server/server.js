const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Chat = require('./Models/chat');
const cors = require('cors');

app.use(cors());
app.use(express.json());

main()
  .then(res => console.log('Connected Sucessfully to Database',))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ChatVerse');
}

app.listen('5000', () => {
  console.log('Listening on port 5000')
})

//Get All Chats Route
app.get('/', async (req, res) => {
  const Chats = await Chat.find();
  res.send(Chats);
})

//New Chat Route
app.post('/chats/new', async (req, res) => {
  const { from, to, msg, createdOn } = req.body;
  const newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    createdOn: createdOn
  })
  newChat.save();
  console.log(newChat);
  })

//Get By Id All Chats Route
app.get('/chats/edit/:id/:from/:to', async (req, res) => {
  const { from, to } = req.params;
  const newChats = await Chat.find({
    $or: [
      { from: from, to: to },
      { from: to, to: from }
    ]
  });

  console.log(newChats);
  res.send(newChats);
})

//Edit Route
app.get('/chats/edit/:id', async (req, res) => {
  const { id } = req.params;
  const editChat = await Chat.findByIdAndUpdate(id);
  console.log(editChat);
})
