import { useState, useEffect } from 'react';

export default function NewListing() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [country, setCountry] = useState('');

    const Listing = {
        title: title,
        description: description,
        image: image,
        price: price,
        location: location,
        country: country,
    }
    
    const FetchData = (event) => {
        event.preventDefault();      
        fetch('http://localhost:5000/listings/new', {
            method: 'POST',
            headers:{ 'Content-Type': 'application/json' },
            body: JSON.stringify(Listing), 
        })
        .then(response => {
            if(response.ok){
                console.log('Successfully Saved')
            }
            return response.json()
        })
        .catch(err => {
            console.log('Error Occurred: ' + err.message + Listing);
        });
    };
    
    


    return (
        <>
            <div className="container">
                <form className="my-3">
                    <div className="row mb-3">
                        <div className="col">
                            <label className="form-label mx-1" for="nl_title" >Title</label>
                            <input type="text" name='listing[title]' value={title} onChange={(event) => {
                                setTitle(event.target.value);
                            }} className="form-control" placeholder="title"></input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label className="form-label mx-1" for="nl_decription" >Description</label>
                            <textarea rows={3} name='listing[description]' className="form-control" value={description} onChange={(event) => {
                                setDescription(event.target.value);
                            }} ></textarea>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label className="form-label mx-1" for="nl_image" >Image</label>
                            <input type="file" name='listing[image]' className="form-control" value={image} onChange={(event) => {
                                setImage(event.target.value);
                            }}></input>
                        </div>
                        <div className="col">
                            <label className="form-label mx-1" for="nl_price" >Price</label>
                            <input type="number" name='listing[price]' className="form-control" value={price} onChange={(event) => {
                                setPrice(event.target.value);
                            }}></input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label className="form-label mx-1" for="nl_location" >Location</label>
                            <input type="text" name='listing[location]' className="form-control" value={location} onChange={(event) => {
                                setLocation(event.target.value);
                            }}></input>
                        </div>
                        <div className="col">
                            <label className="form-label mx-1" for="nl_country" >Country</label>
                            <input type="text" name='listing[country]' className="form-control" value={country} onChange={(event) => {
                                setCountry(event.target.value);
                            }}></input>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input className="btn bg-rose-500 hover:bg-rose-600 text-white form-control" onClick={FetchData} type="submit"></input>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}