import { useEffect, useState } from "react";

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

    return (
        <>
            <div>
                <h1>Users:</h1>
                <ul>
                    {backendData.map((item, index) => (
                        <li key={index}>Email:{item.email} <br></br> Username: {item.username}</li> 
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Users;