import React from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  
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
            <button className='nav__login' onClick={loginHandler}>Login</button>
            <h3 className='nav__dashboard'>Dashboard</h3>
        </div>
    </header>
  )
}

export default Navbar

