import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './newChats.css';

export default function NewChats() {
    const [chats, setChats] = useState([]);
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        msg: '',
        createdOn: Date.now(),
    });
    const [deleteOptionId, setDeleteOptionId] = useState(null); // State to track which message's delete option is active

    const { id, from, to } = useParams();

    useEffect(() => {
        setFormData({ ...formData, from, to }); // Initialize from and to in formData
        fetchChats(); // Fetch initial chats when component mounts
    }, [id, from, to]); // Fetch chats when id, from, or to parameters change

    const fetchChats = () => {
        fetch(`http://localhost:5000/chats/edit/${id}/${from}/${to}`)
            .then(response => response.json())
            .then(data => {
                setChats(data);
            })
            .catch(err => console.error(err));
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendChat = (e) => {
        e.preventDefault();
        const newChat = {
            ...formData,
            from,
            to
        };

        fetch('http://localhost:5000/chats/new', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newChat)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Chat sent successfully:', data);
                setChats([...chats, data]); // Update local state with the new chat message
                setFormData({              // Clear form data after sending chat
                    ...formData,
                    msg: ''
                });
            })
            .catch(err => {
                console.error('Error sending chat:', err);
                // Handle error scenarios here, e.g., show error message to user
            });
    };

    const toggleDeleteOption = (chatId) => {
        if (deleteOptionId === chatId) {
            setDeleteOptionId(null); // Toggle off if already active
        } else {
            setDeleteOptionId(chatId); // Activate delete option for this message
        }
    };

    const deleteChat = (chatId) => {
        fetch(`http://localhost:5000/chats/delete/${chatId}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                // Filter out the deleted chat from the state
                const updatedChats = chats.filter(chat => chat._id !== chatId);
                setChats(updatedChats);
                setDeleteOptionId(null); // Hide delete option after deletion
            })
            .catch(err => {
                console.error('Error deleting chat:', err);
                // Handle error scenarios here
            });
    };

    return (
        <div className='bg-neutral-700 w-2/3 absolute h-full right-0 bottom-0'>
            <div className='profile border border-black text-white bg-neutral-800 flex py-2 pl-2 gap-2'>
                <img className='w-12 h-12 rounded-full' src='https://images.unsplash.com/photo-1718215005618-ca55ae919d15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D' alt='Profile'></img>
                <h3 className='pt-2'>{to}</h3>
            </div>

            <div className='newChats h-5/6 pt-1 pb-2 overflow-auto'>
                {chats.map(chat => (
                    <div key={chat._id} className={chat.from === from ? 'right' : 'left'}>
                        <span className={chat.from === from ? 'right_msgs' : 'left_msgs'}>
                            <p> {chat.msg} <i className="fa-solid fa-chevron-up text-xs" onClick={() => toggleDeleteOption(chat._id)}></i> </p>
                        </span>
                        {deleteOptionId === chat._id && (
                            <div className='DeleteChat w-20  rounded relative top--12'>
                                <button className='btn btn-danger form-control text-xs' onClick={() => deleteChat(chat._id)}>Del</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className='newChat absolute inset-x-0 bottom-0 right-3'>
                <form onSubmit={sendChat} className='relative'>
                    <div className='row mb-1 d-none relative'>
                        <div className='col-6 p-0'>
                            <input type='text' name='from' className='form-control' placeholder='from' value={from} onChange={handleInputChange}></input>
                        </div>
                        <div className='col-6 p-0'>
                            <input type='text' name='to' className='form-control' placeholder='to' value={to} onChange={handleInputChange}></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 p-0'>
                            <input type='text' name='msg' className='form-control msgBox' placeholder='type a message' value={formData.msg} onChange={handleInputChange}></input>
                        </div>
                        <span className='absolute px-0 d-inline sendButton'>
                            <button type='submit' className='pt-7'><i className="hover:text-neutral-500 absolute clickButton bottom-0 fa-solid fa-paper-plane text-neutral-600 text-xl"></i></button>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}
