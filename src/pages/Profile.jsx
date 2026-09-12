import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const Profile = () => {
    const navigate = useNavigate()
     const {id}=useParams()
     const [user, setUser] = useState({})
    function logout() {
        localStorage.clear()
        toast.success("Logout Success")
        navigate('/login')
    }

    useEffect(() => { 
        axios.get(`http://localhost:3000/users/${id}`)
            .then(x => setUser(x.data))
            .catch(err => console.log(err)) 
        }, [id])

    return (
        <>
            <Navbar />
            <div className='profile-container'>
                    <div className='profile'>
                        <div className='profilepic'></div>
                        <h2>{user.name}</h2>
                        <h4>{user.email}</h4>
                        <h4>{user.mobile}</h4>
                        <br/>
                        <button onClick={logout}>Logout</button>
                    </div>
            </div>
        </>
    )
}

export default Profile