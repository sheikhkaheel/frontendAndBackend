const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());
app.use(cors());

main()
.catch( err => console.log(err));

async function main( ) {
    await mongoose.connect('mongodb://127.0.0.1:27017/WanderLand');
}

app.listen('5000',()=>{
    console.log('Server is online on port 5000');
})

app.get('/', (req, res) => {
    res.send('Successful Connection to BackEnd');
});