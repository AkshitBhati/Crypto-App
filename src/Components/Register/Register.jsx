import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../Config' 
import { createUserWithEmailAndPassword } from 'firebase/auth'
import "./Register.css"

const Register = () => {
  //USE STATE FOR STATE MANAGEMENT
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')
    const [user, setUser] = useState([])


   //Creating route for navigating
   const navigate = useNavigate()
   const loginHandler = () => {
       navigate("/login")
   }

   //FUNCTION FOR REGISTERING USER

   const registerUser = () => {
    if(name === "" || email === "" || password === ""){
      
    }
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
           <p className='register__msg' onClick={loginHandler}>Have an account?Login?</p>
       </form>
       <div className='register__btn--container'>
       <button className='register__btn' onClick={registerUser}>Submit</button>
       </div>
      
   </div>
 )
}

export default Register
