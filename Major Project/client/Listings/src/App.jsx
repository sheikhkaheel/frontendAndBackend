import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/navbar';
import NewUser from './Component/Models/NewUser/newUser';
import Users from './Component/Models/Users/users';

function App() {
  return (
    <div className='container-fluid'>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/"  />
          <Route path="/users" element={<Users/>}/>
          <Route path="/newUser" element={<NewUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
