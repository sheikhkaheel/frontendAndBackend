import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const Users = () => {
    const [backendData, setBackendData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api')
            .then(res => res.json())
            .then(data => {
                setBackendData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleDelete = async (id) => {
        try {
            setBackendData(prevData => prevData.filter(item => item._id !== id));

            const response = await fetch(`http://localhost:5000/api/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Failed to delete item');
            }
        } catch (error) {
            console.error('Error deleting item:', error);
            setBackendData(prevData => prevData.filter(item => item._id === id));
        }
    };


    return (
        <>
            <div>
                <h1>Users:</h1>
                <ul>
                    {backendData.map((item) => (
                        <li key={item._id}>
                            Email: {item.email} <br /> Username: {item.username} <br />
                            <button onClick={() => handleDelete(item._id)}>Delete</button>
                            <Link to={`/userEdit/${item._id}`}>
                                <button>Edit</button>
                            </Link>

                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Users;
