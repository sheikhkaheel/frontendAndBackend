import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function EditListing() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [country, setCountry] = useState('');

    const { id } = useParams();


    useEffect(() => {
        GetById(id);
    }, [id]);

    const listing = {
        title: title,
        description: description,
        image: image,
        price: price,
        location: location,
        country: country,
    }

    const Update = (id, event) => {
        event.preventDefault();

        fetch(`http://localhost:5000/listings/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(listing)
        })
            .then(response => {
                if (response.ok) {
                    alert('Successfully Updated Listing');
                }
            })
            .catch(err => {
                console.error(err);
            })
    }

    const GetById = (id) => {
        fetch(`http://localhost:5000/listings/edit/${id}`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setTitle(data.title);
                setDescription(data.description);
                setImage(data.image);
                setPrice(data.price);
                setLocation(data.location);
                setCountry(data.country);
            })
            .catch(err => {
                console.error(err);
            })
    }


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
                            <input className="btn bg-rose-500 hover:bg-rose-600 text-white form-control" onClick={(event) => Update(id, event)} type="submit"></input>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}