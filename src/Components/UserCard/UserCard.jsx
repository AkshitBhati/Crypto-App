import React from 'react'
import { toast } from "react-hot-toast"
import { auth } from "../../Config"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import "./UserCard.css"

const UserCard = ({ name }) => {

  //IMPLEMENTING SIGNOUT FUNCTION
  const navigate = useNavigate()
  const signoutHandler = () => {
      signOut(auth).then(() => {
          toast.success("User logout successfull")
          navigate('/')
      }).catch(err => toast.error("logout failed")) 
  } 
  
  return (
    <div className='userCard'>
        <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" className='userCard__image'/>
        <h3 className='userCard__name'>{name}</h3>
        <button className='userCard__btn' onClick={signoutHandler}>Logout</button>
    </div>
  )
}

export default UserCard
