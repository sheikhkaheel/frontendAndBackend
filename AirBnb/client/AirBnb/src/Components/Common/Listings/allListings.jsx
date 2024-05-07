import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                <form method='GET' action='/listings/new'>
                    <button className='btn bg-rose-500 text-white hover:bg-rose-700'>New Listing</button> <br></br> <br></br>
                </form>
                    <div className='flex flex-row flex-wrap gap-3 mx-2'>
                        {listings.map((item) => (
                            <Link to={`/listings/${item._id}`}>
                                <div className="card transition ease-in-out delay-100 hover:scale-105 duration-300" style="width: 18rem;">
                                    <img className="card-img-top h-60" src={item.image} alt="Card image cap"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">${item.price}</p>
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
