import React from 'react'

const Navbar = () => {
  const id =localStorage.getItem("userId")
  return (
    <>
    <div id='navbar'>
        <div className='nav-left'>
            <h2>LOGO</h2>
        </div>
        <div className='nav-right'>
           <a href='/dashboard'>Products</a>
           <a href='/myorders'>Orders</a>
           <a href={`/profile/${id}`}>Profile</a>
        </div>


    </div>
    </>
  )
}

export default Navbar