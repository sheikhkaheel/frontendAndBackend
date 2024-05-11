import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './allListings.css'

export default function Listings() {
    const [listings, setListings] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/listings');
            const data = await response.json();
            console.log(data);
            setListings(data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <div className='my-4'>
                <div>
                <Link  to='/listings/new'>
                    <button className='ml-3 btn bg-rose-500 text-white hover:bg-rose-700'>New Listing</button> <br></br> <br></br>
                </Link>
                    <div className='flex flex-row flex-wrap gap-3 mx-2'>
                        {listings.map((item) => (
                            <Link to={`/listings/${item._id}`}>
                                <div className="card transition ease-in-out delay-100 hover:scale-105 duration-300" style="width: 18rem;">
                                    <img className="card-img-top h-60" src={item.image} alt="Card image cap"></img>
                                    <div className="card-body px-2">
                                        <h5 className="card-title font-semibold mb-1">{item.title}</h5>
                                        <p className='text-base text-slate-600'>{item.location}</p>
                                        <p className="card-text">${item.price}/night</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
