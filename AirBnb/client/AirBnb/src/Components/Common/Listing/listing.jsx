import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './listing.css';

export default function Listing() {
    const [listing, setListing] = useState('');
    const { id } = useParams();

    useEffect(() => {
        fetchData(id);
    }, [id]);

    const fetchData = (id) => {
        fetch(`http://localhost:5000/listings/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setListing(data);
            })
            .catch(err => { console.log(err) });
    }

    const Delete = (id, event) => {
        event.preventDefault();
        fetch(`http://localhost:5000/listings/${id}`, {
            method: 'DeLETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        })
            .then(response => {
                if (response.ok) {
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
                <div className='container flex flex-row gap-5 mb-4'>
                    <img src={listing.image} className='hotel_pic w-96'></img>
                    <div>
                        <h2 className='text-5xl pb-4 pt-4'>{listing.title}</h2>
                        <p className='text-2xl text-neutral-700 pb-4'>{listing.description} </p>
                        <div className='pb-2 text-xl font-semibold'> {listing.country} {listing.location} </div>
                        <p className='pb-20'>&#8377; {listing.price.toLocaleString('en-IN')} </p>
                        <Link className='btn form-control bg-rose-500 my-2 mr-2 hover:bg-rose-600 rounded-pill px-4 text-white' to={`/listings/edit/${id}`}>Edit</Link>
                        <button className='form-control btn bg-slate-900 my-2 mr-2 hover:bg-slate-950 rounded-pill px-4 text-white' onClick={(event) => {
                            Delete(id, event)
                        }}>Del</button>
                    </div>
                </div> :
                <div>Loading..</div>
            }
        </>
    )
}
