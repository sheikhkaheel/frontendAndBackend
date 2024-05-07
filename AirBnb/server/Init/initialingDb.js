const mongoose = require('mongoose');
const initdata = require('./testData.js');
const Listing = require('../Models/Listings.js');

main()
.catch( err => consolelog(err) )

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/AirBnb');
}

const initializeDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initdata.data);
    console.log('Data was initized in Db');
}

initializeDB();