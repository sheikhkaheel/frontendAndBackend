const mongoose = require('mongoose');

main()
.then( res => console.log(`Connection Successfully`))
.catch(err => console.log(err))

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/App');
}

const UserSchema =  mongoose.Schema({
  email:{
    type: 'string',
    required: true
  },
  password:{
    type:'string',
    required: true
  }
})

const User = mongoose.model('User', UserSchema);

const User1 = new User({
  email: 123,
  password: 'password2'
})

User1.save()
.then ( res => console.log(res))

// User.findOneAndDelete({ email: 'user@example.com'}).then ( res => console.log(res));

// User.find({}).then(res => console.log(res))