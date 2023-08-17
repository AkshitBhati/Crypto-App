import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'

const Navbar = ({userName}) => {
  
  //Implementing OnClick Handlers to navigate 
  const navigate = useNavigate()

  const loginHandler = () => {
    if(userName){
      navigate("/usercard")
    }
    else{
      navigate("/login")
    }
  }
  const homeHandler = () => {
    navigate('/')
  }
  console.log(userName)
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

