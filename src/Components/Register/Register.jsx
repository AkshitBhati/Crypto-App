import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../Config' 
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import "./Register.css"
import { toast } from 'react-hot-toast'

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
      toast.error("All feilds are required")
    }
    else{
      createUserWithEmailAndPassword(auth, email, password)
      .then(async(userCredentials) => {
        const user = userCredentials.user
        await updateProfile(user, {
          displayName:name
        })
        setUser(user);
          toast.success("registered successfully")
          navigate('/')
      })
      .catch((error) => {
          
        if (error.code === "auth/invalid-email") {
          setErr("Invalid email format");
        } else if (error.code === "auth/weak-password") {
          setErr("Password should be at least 6 characters");
        } else {
          setErr("Email already in use.");
        }
      })
      
  }

}

console.log(user)
 return (
   <div className='register'>
   <h1 className='register__heading'>Register</h1>
       <form className='register__form'>
           <label >Name</label>
           <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)}/>
           <label >Email</label>
           <input type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}/>
           <label >Password</label>
           <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />

           {/* For Error Handling */}

           {err && <p className="register__error">{err}</p>}
           
           <p className='register__msg' onClick={loginHandler}>Have an account?Login?</p>
       </form>
       <div className='register__btn--container'>
       <button className='register__btn' onClick={registerUser}>Submit</button>
       </div>
      
   </div>
 )
}

export default Register
