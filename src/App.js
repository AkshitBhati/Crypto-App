import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login'
import Register from "./Components/Register/Register"
import Home from './Pages/Home'

const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes >
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
    </Routes>
    </Router>
  )
}

export default App
