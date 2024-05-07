const mongoose = require('mongoose');

main()
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/AirBnb');
}

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description: String,
    image:{
        type: String,
        set: function(v) {
            return v ? v : "https://unsplash.com/photos/a-bedroom-with-a-bed-and-a-chair-jUQclDhyIAI";
        },
        default: "https://unsplash.com/photos/a-bedroom-with-a-bed-and-a-chair-jUQclDhyIAI"
    },
    price: Number,
    location: String,
    country: String
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
