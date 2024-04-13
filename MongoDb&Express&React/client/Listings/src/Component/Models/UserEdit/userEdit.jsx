import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditUser = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5000/api/users/${id}`)
                .then(res => res.json())
                .then(data => {
                    setUserData(data);
                    setEmail(data.email);
                    setUsername(data.username);
                })
                .catch(error => {
                    console.error('Error fetching user data:', error);
                });
        }
    }, [id]);

    const handleEditUser = () => {
        const updatedUser = { email, username };

        fetch(`http://localhost:5000/api/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
            .then(response => response.json())
            .then(data => {
                console.log('User updated successfully:', data);
                // You might want to redirect the user or show a success message
            })
            .catch(error => {
                console.error('Error updating user:', error);
            });
    };

    return (
        <>
            <div>
                {userData ? (
                    <form>
                        <div className='row my-3'>
                            <div className='col'>
                                <input
                                    className='form-control'
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='col'>
                                <input
                                    className='form-control'
                                    type='text'
                                    name='username'
                                    value={username}
                                    onChange={e => setUsername(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <button className='btn btn-success' onClick={handleEditUser}>Edit User</button>
                            </div>
                        </div>
                    </form>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
};

export default EditUser;
