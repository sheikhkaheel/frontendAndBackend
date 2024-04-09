const mongoose = require('mongoose');

main()
.then( res => console.log(`Connection Successfully`))
.catch(err => console.log(err))

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/App');
}

const UserSchema =  mongoose.Schema({
  username:{
    type:'string',
    default: '@example',
  },
  email:{
    type: 'string',
    required: true,
    maxLength:[20,"Length Exceeded"]
  },
  password:{
    type:'string',
    required: true
  },
  category:{
    type: 'string',
    enum: ['User', 'Administrator']
  }
})

const User = mongoose.model('User', UserSchema);

// const User1 = new User({
//   username:'sheikhmuhammad',
//   email: 'muhammad@gmail.com',
//   password: 'muhammad123',
//   category:'Administrator'
// })

// User1.save()
// .then ( res => console.log(res))

User.findByIdAndUpdate("66116e6e45c65ebdc536c0d8", {email: 'sheikaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}, {runValidators:true})
.then( res => console.log(res))
.catch(err => console.log(err.errors.email.properties.message))

// User.findOneAndDelete({ email: 'user@example.com'}).then ( res => console.log(res));

// User.find({}).then(res => console.log(res))