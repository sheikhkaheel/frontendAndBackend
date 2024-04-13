import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Users = () => {
    const [backendData, setBackendData] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api');
            const data = await response.json();
            setBackendData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/users/${id}`, {
                method: 'DELETE'
            });
            setBackendData(prevData => prevData.filter(item => item._id !== id));
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const filteredUsers = backendData.filter(item =>
        item.username.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <div>
            <h1>Users</h1>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by username"
                    value={searchInput}
                    onChange={handleSearchInputChange}
                />
            </div>
            <ul className="bg-secondary text-white rounded py-4">
                {filteredUsers.map((item) => (
                    <li className="bg-dark py-3 px-4 rounded m-3" key={item._id}>
                        Email: {item.email} <br /> Username: {item.username} <br />
                        <button className="btn mt-3 btn-danger" onClick={() => handleDelete(item._id)}>Del</button>
                        <Link to={`/userEdit/${item._id}`}>
                            <button className="mt-3 mx-2 btn btn-success">Edit</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
