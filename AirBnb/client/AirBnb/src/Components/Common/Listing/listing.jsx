import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

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

    const Delete = (id , event) => {
        event.preventDefault();
        fetch(`http://localhost:5000/listings/${id}`,{
            method: 'DeLETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ id })
        })
        .then( response => {
            if(response.ok){
                alert('Deleted Successfully');
            }
        })
        .catch(err => {
            console.error(err);
        });
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
            <Link className='btn bg-rose-500 my-2 mr-2 hover:bg-rose-600 rounded-pill px-4 text-white' to={`/listings/edit/${id}`}>Edit</Link>
            <button className='btn bg-rose-500 my-2 mr-2 hover:bg-rose-600 rounded-pill px-4 text-white' onClick={(event)=>{
                Delete(id,event)
            }}>Del</button>
            </div> :
            <div>Loading..</div>
            }
        </>
    )
}
