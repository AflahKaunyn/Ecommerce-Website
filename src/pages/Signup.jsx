import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [mobile,setMobile]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()

  function signup(e){
    e.preventDefault()
    const data={name,email,mobile,password}
    axios.post("http://localhost:3000/users",data)
    .then(()=>{
      toast.success("Signup Success")
      setName("")
      setEmail("")
      setMobile("")
      setPassword("")
      navigate("/login")
  })
  .catch(err=>toast.error("Signup Failed"))
  }


  return (
    <>    
        <div className='signup-form'>
            <form onSubmit={signup}>
                <h2>Signup Page</h2>
                <input type="text" placeholder="Enter Name" required 
                value={name} onChange={(e) => setName(e.target.value)}/><br/>

                <input type="text" placeholder="Enter Email" required 
                required value={email} onChange={(e) => setEmail(e.target.value)}/><br/>

                <input type="text" placeholder="Enter Mobile no" required 
                value={mobile} onChange={(e) => setMobile(e.target.value)}/><br/>

                <input type="text" placeholder="Enter Password" required 
                value={password} onChange={(e) => setPassword(e.target.value)}/><br/>

                <button id="signup">Signup</button>
                <p>Already have an account? <Link to={"/login"}>Login</Link></p>
            </form>
        </div>
    </>
  )
}

export default Signup