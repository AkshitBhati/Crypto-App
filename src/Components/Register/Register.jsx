import React from 'react'
import "./Register.css"
import { useNavigate } from 'react-router-dom'

const Register = () => {


   //Creating route for navigating
   const navigate = useNavigate()
   const registerHandler = () => {
       navigate("/login")
   }

 return (
   <div className='register'>
   <h1 className='register__heading'>Register</h1>
       <form className='register__form'>
           <label >Name</label>
           <input type="text" placeholder='Enter Name' />
           <label >Email</label>
           <input type="email" placeholder='Enter Email'/>
           <label >Password</label>
           <input type="password" placeholder='Enter Password'/>
           <p className='register__msg' onClick={registerHandler}>Have an account?Login?</p>
       </form>
       <div className='register__btn--container'>
       <button className='register__btn'>Submit</button>
       </div>
      
   </div>
 )
}

export default Register
