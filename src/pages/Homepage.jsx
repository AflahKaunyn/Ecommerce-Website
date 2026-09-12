import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
const Homepage = () => {
    const navigate=useNavigate()
  return (
    <>
        <div className={'container'}>
            <button id='signup-btn' onClick={()=>{navigate("/signup")}}>Signup</button>
            <button id='login-btn'onClick={()=>{navigate("/login")}}>Login</button>
        </div>
    </>
  )
}
export default Homepage

