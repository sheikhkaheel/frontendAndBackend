const mongoose = require('mongoose');

main()
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/App');
}

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    category: String,
});

const manyUsers = [
    { username: 'Kaheel', email: 'Kaheel@gmail.com' },
    { username: 'Zaid', email: 'Zaid@gmail.com' },
    { username: 'Saalim', email: 'Saalim@gmail.com' },
    { username: 'Sahil', email: 'Sahil@gmail.com' },
]

const User = mongoose.model("User", userSchema);

User.insertMany(manyUsers)
    .then( res => console.log(res) )
    .catch(err => console.log(err))
    
