const mongoose = require('mongoose');

main()
.then( res => console.log(`Connection Successfully`))
.catch(err => console.log(err))

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:Number,
});

const User = new mongoose.model('User', userSchema);

const parentSchema = new mongoose.Schema({
  name:String,
  email:String,
  phoneNumber:Number,
  Age:Number,
})

const Parent = new mongoose.model('Parent',parentSchema);

// Parent.insertMany([
//   { name:"Kaheel", email:"sheilkkaheel@gmail.com", phoneNumber: 6006307545, Age: 21 },
//   { name:"Zaid", email:"zaidtariq@gmail.com", phoneNumber: 6006997545, Age: 21 },
//   { name:"Kaheel", email:"saalimwali@gmail.com", phoneNumber: 6006307745, Age: 20 }, 
// ])
// .then( res => console.log(res))
// .catch(err => console.log(err))


Parent.find({}).then(res => console.log(res))

// Parent.updateOne({ name:"Zaid" } , {Age:24})
// .then ( res => console.log(res))
// .catch ( err => console.log(err))

// Parent.findOneAndUpdate({ email:"saalimwali@gmail.com" } , {name:"Saalim"})
// .then ( res => console.log(res))
// .catch ( err => console.log(err))

// Parent.findOneAndUpdate({ email:"saalimwali@gmail.com" } , {name:"Saalim"} , {new : true})
// .then ( res => console.log(res))
// .catch ( err => console.log(err))

// Parent.findByIdAndUpdate({ _id:'661022f1b2f5bea482d16e65'} , { name:"Salim"} , {new : true})
// .then ( (res) => console.log(res))
// .catch ( (err) => console.log(err)) 

// const newParent = new Parent({ name : "Atif" , email : "atif@gmail.com" , Age : 22})

// newParent.save()
//  .then((res) => console.log(res))
//  .catch((err) => console.log(err))

// const parent2 = new Parent({
//   name:'Eve',
//   email:"eve@gmail.com",
//   phoneNumber:9499543390
// })

// parent2.save()
// .then((res) => console.log(res))
// .catch((err) => console.log(err))

Parent.deleteOne({name:"Sahil"})
.then((res) => console.log(res))