import React from 'react'
const Navbar = () => {
  return (
    <header className='flex justify-around font-semibold text-white p-4 '>
        <h2 className='nav__heading '>Crypto App</h2>
        <div >
            <button className='mr-3 border rounded px-3 py-1 text-blue-800 bg-white '>Login</button>
            <span>Dashboard</span>
        </div>
    </header>
  )
}

export default Navbar
