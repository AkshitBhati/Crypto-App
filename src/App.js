import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast";
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login'
import Register from "./Components/Register/Register"
import Home from './Pages/Home'
import UserCard from './Components/UserCard/UserCard';
import { auth } from './Config'
import { toast } from 'react-hot-toast'

const App = () => {

  //FUNCTION FOR DISPLAYING THE LOGGEDIN USER NAME
  
  const [userName, setUserName] = useState("")

 useEffect(() => {
  try{
    
  auth.onAuthStateChanged((user) => {
    if(user){
      const fullName = user.displayName
      const nameParts = fullName.split(" ")
      const firstName = nameParts[0]
      setUserName(firstName)
    }
    else{
      setUserName("")
    }
  })
} catch(err){
  
  toast.error("Please Login")
}
 }) 
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

    <Navbar userName = {userName}/>
    <Routes >
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/usercard' element={<UserCard name={userName} />} />

    </Routes>
    </Router>
  )
}

export default App
