import React from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'


const Login = () => {

    //Creating route for navigating
    const navigate = useNavigate()
    const registerHandler = () => {
        navigate("/register")
    }

  return (
    <div className='login'>
        <h1 className='login__heading'>Login</h1>
        <form className='login__form'>
            
            <label >Email</label>
            <input type="email" placeholder='Enter Email'/>
            <label >Password</label>
            <input type="password" placeholder='Enter Password'/>
            <p className='login__msg' onClick={registerHandler}>New User? Register?</p>
        </form>
        <div className='login__btn--container'>
        <button className='login__btn'>Submit</button>
        </div>
       
    </div>
  )
}

export default Login
