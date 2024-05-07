import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Listing(){
    const [listing, setListing] = useState('');
    const { id } = useParams();

    useEffect(() => {
        fetchData(id);
    },[id]);

    const fetchData = (id) => {
        fetch(`http://localhost:5000/listings/${id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setListing(data);
        })
        .catch(err => { console.log(err)});
    } 

    return (
        <>
            {listing ? 
            <div>
            {listing.title} <br></br>
            {listing.description} <br></br>
            <img src={listing.image} className='w-60 h-60'></img>
            &#8377; {listing.price.toLocaleString('en-IN')} <br></br>
            {listing.location} <br></br>
            {listing.country} <br></br>
            </div> :
            <div>Loading..</div>
            }
        </>
    )
}
