const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const Listing = require('./Models/Listings');
const methodOverride = require('method-override');
const wrapAsync = require('./Utils/wrapAsync.js')
const ExpressError = require('./Utils/expressError.js');
const { wrap } = require('module');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"));

main()
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/AirBnb');
}

// Root API
app.get('/', (req, res) => {
  res.send('Root')
})

//Delete Listing API
app.delete('/listings/:id', wrapAsync(async (req, res, next) => {
  const { id } = req.params
  const DeleteListing = await Listing.findByIdAndDelete(id);
  console.log(DeleteListing);
}))

// Update Listing API
app.put('/listings/:id', wrapAsync(async (req, res, next) => {
  const { id } = req.params
  const listing = req.body
  const UpdateListing = await Listing.findByIdAndUpdate(id, listing);
  console.log("Updated Listing");
}));

// All Listings API 
app.get('/listings', async (req, res) => {
  const allListings = await Listing.find({})
  res.send(allListings);
})

// New Listings API
app.post('/listings/new', wrapAsync(async (req, res, next) => {
  if (!req.body.listing) {
    res.status(400).json({ error: 'Send valid Data for listing' }); // Send custom error message
    return;
    // throw new ExpressError(400,'Send valid Data for listing');
  }
  const listing = req.body.listing
  console.log(listing);
  const newListing = await new Listing(listing);
  await newListing.save()
}));

// Edit Listing API 
app.get('/listings/edit/:id', wrapAsync(async (req, res, next) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  // console.log(listing);
  res.send(listing);
}));

// One Listing API
app.get('/listings/:id', wrapAsync(async (req, res, next) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  console.log(listing);
  res.send(listing);
}))

// Error handler for all Routes
app.all('*', (req, res, next) => {
  console.log("in the all middleware")
  // res.send('error');
  next(new ExpressError(404, "Page Not Found!"));
});

// Error handling
app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong!" } = err;
  // res.status(statusCode).send(message);
  res.status(statusCode).json({error:message});
});


app.listen(5000, () => {
  console.log('Server  is Online on port 5000');
})