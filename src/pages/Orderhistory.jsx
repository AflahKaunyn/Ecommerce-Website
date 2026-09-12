import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'

const Orderhistory = () => {
  const [order, setOrder] = useState([])
  const customerId = localStorage.getItem("userId");

  useEffect(() => {
    axios.get(`http://localhost:3000/orders?customer_id=${customerId}`)
      .then(x => setOrder(x.data))
      .catch(err => console.log(err))
  }, [customerId])

  return (
    <>
      <Navbar />
      <div className='order-container'>
        {order.length>0? (
          order.map(order => (
          <div className='order' key={order.id}>
            <img src={order.product_img} width="100" />
            <h3>{order.product_name}</h3>
            <p>Quantity: {order.product_quantity}</p>
            <p>Total: ₹{order.total}</p>
            <p>Date: {order.order_date}</p>
            <p>Address: {order.customer_address}</p>
          </div>
        ))):(<center><h2>No Products Found</h2></center>)}
      
      </div>
    </>
  )
}

export default Orderhistory

