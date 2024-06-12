import { useState } from 'react';
import { useFormValidation } from '../../Validation/useValidation.jsx';
import ErrorDisplay from '../Error/error.jsx';

export default function NewListing() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [country, setCountry] = useState('');
    const [error, setError] = useState(null);

    const { applyValidation } = useFormValidation();

    const Listing = {
        title: title,
        description: description,
        image: image,
        price: price,
        location: location,
        country: country,
    }

    const FetchData = async (event) => {
        event.preventDefault();
        const isValid = applyValidation(); 
        console.log(isValid);
    
        if (!isValid) {
            setError('Fields not Filled'); 
            return;
        }
    
        const requestBody = { listing: Listing };
    
        try {
            const response = await fetch('http://localhost:5000/listings/new', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody),
            });
    
            if (response.ok) {
                console.log('Successfully Saved');
                console.log(Listing);
            } else {
                const errorData = await response.json();
                setError(errorData.error);
                setError(errorData.error);
                console.log(errorData);
            }
        } catch (err) {
            setError('An error occurred while fetching data.'); 
            console.error(err);
        }
    };
    



    return (
        <>
            {error ? <ErrorDisplay error={error} /> : ''}

            <div className="container">

                <form className="my-3 needs-validation" novalidate>
                    <div className="row mb-3">
                        <div className="col">
                            <label className="form-label mx-1" htmlFor="nl_title" >Title</label>
                            <input type="text" name='listing[title]' value={title} onChange={(event) => {
                                setTitle(event.target.value);
                            }} className="form-control" placeholder="title" required></input>
                            <div className='valid-feedback'>Title look good</div>
                            <div className='invalid-feedback'>Title should be valid</div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label className="form-label mx-1" htmlFor="nl_decription" >Description</label>
                            <textarea rows={3} name='listing[description]' className="form-control" value={description} onChange={(event) => {
                                setDescription(event.target.value);
                            }} required></textarea>
                            <div className='invalid-feedback'>Enter a Descritption</div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label className="form-label mx-1" htmlFor="nl_image" >Image</label>
                            <input type="file" name='listing[image]' className="form-control" value={image} onChange={(event) => {
                                setImage(event.target.value);
                            }}></input>
                        </div>
                        <div className="col">
                            <label className="form-label mx-1" htmlFor="nl_price" >Price</label>
                            <input type="text" name='listing[price]' className="form-control" value={price} onChange={(event) => {
                                setPrice(event.target.value);
                            }} required></input>
                            <div className='invalid-feedback'>Enter a valid price</div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label className="form-label mx-1" htmlFor="nl_location" >Location</label>
                            <input type="text" name='listing[location]' className="form-control" value={location} onChange={(event) => {
                                setLocation(event.target.value);
                            }} required></input>
                            <div className='invalid-feedback'>Enter a location</div>
                        </div>
                        <div className="col">
                            <label className="form-label mx-1" htmlFor="nl_country" >Country</label>
                            <input type="text" name='listing[country]' className="form-control" value={country} onChange={(event) => {
                                setCountry(event.target.value);
                            }} required></input>
                            <div className='invalid-feedback'>Enter a country</div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <button className="btn bg-rose-500 hover:bg-rose-600 text-white form-control" onClick={FetchData}>Add</button>
                        </div>
                    </div>
                </form>

            </div>

        </>
    )
}