import React from 'react'
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';


Home
const App = () => {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
    </div>
  )
}

export default App