import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className='login'>
        <h1 className='login__heading'>Login</h1>
        <form className='login__form'>
            <label >Name</label>
            <input type="text" placeholder='Enter Name'/>
            <label >Email</label>
            <input type="email" placeholder='Enter Email'/>
            <label >Password</label>
            <input type="password" placeholder='Enter Password'/>

        </form>
        <div className='login__btn--container'>
        <button className='login__btn'>Submit</button>
        </div>
    </div>
  )
}

export default Login
