import React, { useEffect, useState } from 'react';
import './chats.css';

export default function Chats() {
    const [backendData, setBackendData] = useState([]);
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        msg: '',
        createdOn: Date.now(),
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('http://localhost:5000')
            .then(response => response.json())
            .then(data => {
                setBackendData(data);
            })
            .catch(err => console.error(err));
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const Send = (event) => {
        event.preventDefault();
        console.log('Working')
        fetch('http://localhost:5000/chats/new', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    console.log('Success')
                    console.log(JSON.stringify(formData));
                }
            })
            .catch(err => console.error(err));
        // console.log(formData)
    }

    return (
        <div className='flex'>
            <div className='bg-neutral-800 text-white w-1/3 h-screen overflow-auto chat_list'>
                <div className='chats'>
                    <div className='flex justify-between'>
                        <h1 className='text-2xl font-semibold pl-2 pt-2'>Chats</h1>
                        <i className="fa-solid fa-plus p-4 px-4" title='New Chat'></i>
                    </div>
                    {backendData.map(chat => (
                        <div className='flex gap-3 py-4 mx-2 px-2 rounded hover:bg-neutral-700' key={chat._id}>
                            <img className='w-16 h-16 rounded-full' src='https://images.unsplash.com/photo-1718215005618-ca55ae919d15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D'></img>
                            <div>
                                <div className='flex justify-between w-80 pr-4 pt-1'>
                                    <p className='font-semibold'>{chat.to}</p>
                                    <p className='font-light text-xs'> {chat.createdOn.substring(0, 10)}</p>
                                </div>
                                <p className='text-xs font-light'>{chat.msg}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='bg-neutral-700 w-2/3 h-screen'>
                <div className='newChat absolute inset-x-0 bottom-0 right-6'>
                    <form onSubmit={Send}>
                        <div className='row mb-1'>
                            <div className='col-6 p-0'>
                                <input type='text' name='from' className='form-control' placeholder='from' onChange={handleInputChange}></input>
                            </div>
                            <div className='col-6 p-0'>
                                <input type='text' name='to' className='form-control' placeholder='to' onChange={handleInputChange}></input>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-11 p-0'>
                                <input type='text p-0' name='msg' className='form-control' placeholder='message' onChange={handleInputChange}></input>
                            </div>
                            <div className='col-1 p-0'>
                                <button type='submit' className='btn btn-success'>Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
