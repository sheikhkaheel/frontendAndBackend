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
                <h1>Users</h1>
                <ul className="bg-secondary text-white rounded py-4">
                    {backendData.map((item) => (
                        <li className="bg-dark py-3 px-4 rounded m-3 " key={item._id}>
                            Email: {item.email} <br /> Username: {item.username} <br />
                            <button className="btn mt-3 btn-danger" onClick={() => handleDelete(item._id)}>Del</button>
                            <Link to={`/userEdit/${item._id}`}>
                                <button className="mt-3 mx-2 btn btn-success">Edit</button>
                            </Link>

                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Users;
