import React, { useEffect, useState } from 'react';

export default function Chats() {
    const [backendData, setBackendData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('http://localhost:5000')
            .then(response => response.json())
            .then(data => {
                console.log('success');
                setBackendData(data);
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
        <h1 className='text-2xl font-semibold'>List of Chats</h1>
        {backendData.map(chat => (
            <div className='py-4 pl-4' key={chat._id}>
                <p>From: {chat.from}</p>
                <p>To: {chat.to}</p>
                <p>Message: {chat.msg}</p>
                <p>Created On: {chat.createdOn}</p>
            </div>
        ))}
    </div>
    );
}
