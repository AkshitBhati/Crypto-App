import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast";
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login'
import Register from "./Components/Register/Register"
import Home from './Pages/Home'

const App = () => {
  return (
    <Router>
      {/* Toaster for toast notification */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            fontSize: "1.2rem",
            fontWeight: "bold",
            background: "rgba(0, 0, 0, 0.8)",
            color: "#fff",
          },
        }}
      />

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
