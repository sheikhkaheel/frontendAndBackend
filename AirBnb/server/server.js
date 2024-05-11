const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const Listing = require('./Models/Listings');
const methodOverride = require('method-override');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"));

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

//Delete Listing API
app.delete('/listings/:id', async (req, res) => {
  const {id} = req.params
  const DeleteListing = await Listing.findByIdAndDelete(id);
  console.log(DeleteListing);
})

// Update Listing API
app.put('/listings/:id', async (req, res) => {
  const {id} = req.params
  const listing = req.body
  const UpdateListing = await Listing.findByIdAndUpdate(id , listing);
  console.log("Updated Listing");
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

// Edit Listing API 
app.get('/listings/edit/:id' , async (req, res) => {
  const {id} = req.params;
  const listing = await Listing.findById(id);
  // console.log(listing);
  res.send(listing);
})


// One Listing API
app.get('/listings/:id', async(req, res) => {
  const {id} = req.params;
  const listing = await Listing.findById(id);
  console.log(listing);
  res.send(listing);
})