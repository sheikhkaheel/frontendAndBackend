const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const Listing = require('./Models/Listings');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

main()
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/AirBnb');
}

app.listen(5000, () => {
  console.log('Server  is Online on port 5000');
  
})

// Root API
app.get('/', (req, res) => {
    res.send('Root')
})


// All Listings API 
app.get('/listings', async(req, res) => {
  const allListings = await Listing.find({})
  res.send(allListings);
})

// New Listings API
app.post('/listings/new', async (req, res) => {
  const listing = req.body
  console.log(listing);
  const newListing = await new Listing(listing);
  await newListing.save()
});


// One Listing API
app.get('/listings/:id', async(req, res) => {
  const {id} = req.params;
  const listing = await Listing.findById(id);
  console.log(listing);
  res.send(listing);
})