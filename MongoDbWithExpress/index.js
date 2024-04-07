const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./Models/chat.js');
const methodOverride = require('method-override');

// Setting Excess to Folders
app.set('views', path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));   // used to parse the url data
app.use(methodOverride("_method"));  // inorder to use method other than get and post  For using Put and Del

// Setting connection to Database
main()
  .then(res => console.log('Connecion successfully to Database'))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ChatApp');
}

// Port 
app.listen(8000, () => {
  console.log('Sever is listening on port 8000');
})

// Delete Chat
app.delete('/chats/:id', async(req,res) => {
  let { id } = req.params;
  let deleteChat = await Chat.findByIdAndDelete(id)
  console.log(deleteChat);
  res.redirect('/chats');
})

// Update Chat
app.put('/chats/:id', async(req,res) => {
  let { id } = req.params;
  let {msg : newChat} = req.body;
  let updateChat = await Chat.findByIdAndUpdate(id, {msg: newChat}, {runValidators: true,new: true});

  console.log(updateChat);
  res.redirect('/chats')
})

// Edit Chat
app.get('/chats/:id/edit', async(req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id)
  res.render('editMsg.ejs', {chat});
})

// Insert newChat
app.post('/chats', (req, res) => {
  let { from, to, msg } = req.body;
  // console.log(req.body);

  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date()
  })

  newChat.save()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  res.redirect('/chats')
})

// New Chat 
app.get('/chats/new', (req, res) => {
  res.render('newMsg.ejs');
})

// Chat List Route
app.get('/chats', async (req, res) => {
  let chats = await Chat.find()
  // console.log(chats)
  res.render('index.ejs', { chats })
})

// Root Route
app.get('/', (req, res) => {
  res.send('Root is Working');
})

// const chat1 = new Chat({
//     from:'Kaheel',
//     to:'Zaid',
//     msg:'Kya sa Wazai',
//     create_at: new Date()
// })

// chat1.save()
// .then( res => console.log(res))
// .catch(err => console.log(err))

// Chat.deleteMany({from:"Kaheel"})
// .then( res => console.log(res))