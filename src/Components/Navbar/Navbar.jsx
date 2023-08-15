import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <header >
        <div className='nav__name'>
            <h1>Crypto App</h1>
        </div>
        <div className='nav__menuItems'>
            <button className='nav__login'>Login</button>
            <h3 className='nav__dashboard'>Dashboard</h3>
        </div>
    </header>
  )
}

export default Navbar

