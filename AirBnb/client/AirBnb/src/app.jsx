import Footer from "./Components/Boilerplate/Fooler/footer";
import Navbar from "./Components/Boilerplate/Nav/navbar.jsx";
import Listing from "./Components/Common/Listing/listing.jsx";
import Listings from "./Components/Common/Listings/allListings";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewListing from "./Components/Common/NewListing/newListing.jsx";
import EditListing from "./Components/Common/EditListing/editListing.jsx";

export function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Listings />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listings/:id" element={<Listing />} />
          <Route path="/listings/new" element={<NewListing />} />
          <Route path="/listings/edit/:id" element={<EditListing />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
