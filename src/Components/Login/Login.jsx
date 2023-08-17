import React, { useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../Config"
import { toast } from 'react-hot-toast'


const Login = () => {
  //Creating state for email and password
    const [email ,setEmail] = useState("")
    const [password ,setPassword] = useState("")
    const [err ,setErr] = useState([])

    //Creating route for navigating
    const navigate = useNavigate()
    const registerHandler = () => {
        navigate("/register")
    }

    //FUNCTION FOR HANDLING LOGIN 
    const  loginHandler = () => {
      if (email === "" || password === "") {
        toast.error("Fill all fields");
      } else {
        signInWithEmailAndPassword(auth, email, password)
          .then(async(userCredentials) => {
            navigate('/')
            toast.success("logedin successfully")
          })
          .catch((error) => {
            
            if (error.code === "auth/invalid-email") {
              setErr("Invalid email format");
            } else if (error.code === "auth/wrong-password") {
              setErr("Password should be at least 6 characters");
            } else{
            setErr("User not found")  
            }
            // console.log(error)
          })
          
      }
    };
    
    //FUNCTION FOR GUEST LOGIN
    const guestLogin = () => {
      setEmail("akshitworks24@gmail.com")
      setPassword("@kshitbh@ti44")
      
    }

  return (
    <div className='login'>
        <h1 className='login__heading'>Login</h1>
        <form className='login__form'>
            
            <label >Email</label>
            <input type="email" placeholder='Enter Email' value={email}/>
            <label >Password</label>
            <input type="password" placeholder='Enter Password' value={password}/>
            {err && <p className="login__error">{err}</p>}
            <p className='login__msg' onClick={registerHandler}>New User? Register?</p>
        </form>
        <div className='login__btn--container'>
        <button className='login__btn' onClick={loginHandler}>Submit</button>
        <button className='login__btn' onClick={guestLogin}>Guest Login</button>
        </div>
       
    </div>
  )
}

export default Login
