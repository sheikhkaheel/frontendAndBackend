import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chats from './Components/Common/chats/chats'
import NewChats from './Components/Common/newChats/newChats'

function App() {

  return (
    <>
      <Router>
        <Chats />
        <Routes>
          <Route path="/chats/:from/:to" element={<NewChats />} />
          <Route path="/chats/edit/:from/:to" element={<NewChats />} />
          {/* <Route path="/" element={<Chats />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
