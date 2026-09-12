import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const Login = () => {
    const [email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()

     function login(e){
            e.preventDefault()
            axios.get("http://localhost:3000/users")
            .then(x=>{
                let users=x.data
                let result=users.find((x)=>{
                    return (x.email===email && x.password===password)
                })
                if (result){
                    toast.success("Login Successfull")
                    localStorage.setItem("userId",result.id)
                    localStorage.setItem("isLoggedIn",true)
                    localStorage.setItem("username",result.name)
                    navigate("/dashboard")
                }
                else{
                    toast.error("Login Failed")
                }
            })
            .catch(err=>{toast.error("failed")
                console.log(err)
            })
        }
   
    return (
        <>
            <div className='login-form'>
                <form onSubmit={login}>
                    <h2>Login Page</h2>
                    <input type="text" placeholder="Enter Email"required 
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    /><br />

                    <input type="text" placeholder="Enter Password"required 
                    value={password} onChange={(e)=>setPassword(e.target.value)}
                    /><br />
                    
                    <button id="login">Login</button>
                    <p>New User? <Link to={"/signup"}>Signup</Link></p>
                </form>
            </div>

        </>
    )
}

export default Login