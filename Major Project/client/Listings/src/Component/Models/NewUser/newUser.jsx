import React, { useState } from 'react';

const NewUser = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [backendData, setBackendData] = useState([]); // Define backendData state

    const sendEmail = () => {
        fetch('http://localhost:5000/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, username: username })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Data received after sending email:', data);
                setBackendData([data, ...backendData]); // Update backendData state
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    }

    return (
        <>
            <form>
                <div className='row'>
                    <div className='col'>
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter new email address'
                        className='form-control my-3'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>
                    <div className='col'>
                    <input
                        type='text'
                        name='username'
                        className='form-control my-3'
                        placeholder="Enter new username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    </div>
                </div>
                    <button className='btn btn-primary' onClick={sendEmail}>Send</button>
            </form>
        </>
    )
}

export default NewUser;
