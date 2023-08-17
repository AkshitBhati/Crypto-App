import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'
import { auth } from '../../Config'
import { toast } from 'react-hot-toast'

const Navbar = () => {
  //FUNCTION FOR DISPLAYING THE LOGGEDIN USER NAME
  const [userName, setUserName] = useState("")

 useEffect(() => {
  try{
    
  auth.onAuthStateChanged((user) => {
    if(user){
      setUserName(user.displayName)
    }
    else{
      setUserName("")
    }
  })
} catch(err){
  
  toast.error("Please Login")
}
 }) 
  
  //Implementing OnClick Handlers to navigate 
  const navigate = useNavigate()

  const loginHandler = () => {
    navigate("/login")
  }
  const homeHandler = () => {
    navigate('/')
  }
  return (
    <header >
        <div className='nav__name'>
            <h1 onClick={homeHandler}>Crypto App</h1>
        </div>
        <div className='nav__menuItems'>
            <button className='nav__login' onClick={loginHandler}>{userName ?  userName : "Login"}</button>
            <h3 className='nav__dashboard'>Dashboard</h3>
        </div>
    </header>
  )
}

export default Navbar

