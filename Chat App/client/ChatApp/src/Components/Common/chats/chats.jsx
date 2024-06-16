import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './chats.css';

export default function Chats() {
    const [backendData, setBackendData] = useState([]);
    const [user, setUser] = useState({
        from: '',
        to: '',
    });

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
        console.log(user);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        // Replace with your fetch logic to get chats from backend
        fetch('http://localhost:5000')
            .then(response => response.json())
            .then(data => {
                // Step 1: Group chats by 'from' value
                const groupedChats = {};
                data.forEach(chat => {
                    if (!groupedChats[chat.from]) {
                        groupedChats[chat.from] = [];
                    }
                    groupedChats[chat.from].push(chat);
                });

                // Step 2: Sort chats within each group by 'createdOn' descending
                for (let from in groupedChats) {
                    groupedChats[from].sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn));
                }

                // Step 3: Create array with latest chat for each 'from' value
                const latestChats = Object.keys(groupedChats).map(from => groupedChats[from][0]);

                // Update state with latest chats
                setBackendData(latestChats);
            })
            .catch(err => console.error(err));
    };

    const newUser = () => {
        let div = document.querySelector('.newUser');
        div.classList.toggle('d-block');
        div.classList.toggle('d-none');
    }

    return (
        <div className='flex'>
            <div className='bg-neutral-800 text-white w-1/3 h-screen overflow-auto chat_list'>
                <div className='chats'>
                    <div className='flex justify-between'>
                        <Link style={{ color: 'inherit', textDecoration: 'none' }} to={`/`}><h1 className='text-2xl font-semibold pl-2 pt-2'>Chats</h1></Link>
                        <i className="fa-solid fa-plus p-4 px-4" title='New Chat' onClick={newUser}></i>
                    </div>
                    <div className='newUser absolute w-80 left-20 rounded h-46 bg-neutral-700 d-none p-2' style={{ zIndex: 999 }}>
                        <form>
                            <input type='text' placeholder='from' name='from' onChange={handleInputChange} className='mt-1 form-control rounded bg-neutral-600'></input>
                            <input type='text' placeholder='to' name='to' onChange={handleInputChange} className='my-2 rounded form-control'></input>
                            <Link to={`/chats/${user.from}/${user.to}`} className='btn btn-secondary form-control rounded' onClick={(event)=>{
                                event.target.closest('div').classList.add('d-none');
                            }}>Add</Link>
                        </form>
                    </div>
                    {backendData.map(chat => (
                        <Link
                            key={chat._id} style={{ textDecoration: 'none', color: 'inherit' }} to={`/chats/edit/${chat.from}/${chat.to}`}>
                            <div className='flex gap-3 py-2 mx-2 px-2 rounded hover:bg-neutral-700'>
                                <img
                                    className='w-16 h-16 rounded-full'
                                    src='https://images.unsplash.com/photo-1718215005618-ca55ae919d15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D'
                                    alt={`Profile of ${chat.from}`}
                                />
                                <div>
                                    <div className='flex justify-between w-72 h-8 pt-1'>
                                        <p className='font-semibold'>{chat.to}</p>
                                        <p className='font-light text-xs pt-1'> {chat.createdOn.substring(0, 10)}</p>
                                    </div>
                                    <p className='text-xs font-light'>{chat.msg}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
