import React, { useState, useEffect } from 'react';

function App() {
  const [backendData, setBackendData] = useState([]);
  const [email, setEmail] = useState('');

  const sendEmail = () => {
    fetch('http://localhost:5000/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email })
    })
      .then(response => response.json())
      .then(data => {
        setBackendData([data , ...backendData]); 
      })
      .catch( () => {
        console.error('Error sending email:');
      });
  }

  // console.log(sendEmail);

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
        <div>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter new email address'></input>
          <button onClick={sendEmail}>Send</button>
        </div>
        <h1>Emails:</h1>
        <ul>
          {backendData.map((item, index) => (
            <li key={index}>{item.email}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
