const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const User = require('./Models/users');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

main()
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/App');
}

app.listen(5000, () => {
  console.log('Server  is Online on port 5000');
})

app.get('/api', async (req, res) => {
  let users = await User.find();
  res.send(users);
})

app.post('/api', async(req, res) => {
  let { email , username } = req.body;
  let newUser = new User({ email , username });
  console.log(newUser);
  await newUser.save()
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
});
