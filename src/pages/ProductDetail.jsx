import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const ProductDetail = () => {
  let { id } = useParams()
  const [product, setProduct] = useState({})

  // useEffect(()=>{ },[id])
  axios.get(`http://localhost:3000/products/${id}`)
    .then(x => setProduct(x.data))
    .catch(err => console.log(err))

    
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [quantity, setQuantity] = useState(1)


  function inc() {
    setQuantity(quantity + 1)
  }

  function dec() {
    if (quantity >= 2) {
      setQuantity(quantity - 1)
    }
  }
  function handleuser(e) {
    e.preventDefault()
    const data = { name, mobile, email, address }
    setAddress('')
    setEmail('')
    setMobile('')
    setName('')
  }

  const navigate = useNavigate()
  function placeorder(e) {
    e.preventDefault()
    let order = {
      customer_id: localStorage.getItem("userId"),
      customer_name: name,
      customer_email: email,
      customer_phone: mobile,
      customer_address: address,
      product_id: product.id,
      product_name: product.product_name,
      product_quantity: quantity,
      total: quantity * product.product_price,
      order_date: new Date().toLocaleDateString(),
      product_img: product.product_image
    }

    axios.post("http://localhost:3000/orders", order)
      .then(() => {
        toast.success("Item Ordered Successfully")
        navigate('/success')
      })
      .catch(err => toast.error("Failed to Order"))
  }

  return (
    <>
      <Navbar />
      <div className='product-details'>
        <div className='product'>
          <center><h1>{product.product_name}</h1></center>
          <img src={product.product_image} height={"300px"} alt="Image" />
          <h3>Price: ₹{product.product_price}</h3>
          <h4>{product.product_category}</h4>
          <p><b>Specification:</b> {product.product_description}</p>
          <p><b>Ratings</b>:⭐⭐⭐⭐{product.product_ratings}/5</p>

          <button onClick={dec}>-</button><h2>{quantity}</h2><button onClick={inc}>+</button>
        </div>


        <form>
          <input type='text' placeholder="Enter Name" required
            value={name} onChange={(e) => setName(e.target.value)} /><br />

          <input type='text' placeholder='Enter Mobile' required
            value={mobile} onChange={(e) => setMobile(e.target.value)} /><br />

          <input type='text' placeholder='Enter Email' required
            value={email} onChange={(e) => setEmail(e.target.value)} /><br />

          <textarea placeholder='Enter Address' required
            value={address} onChange={(e) => setAddress(e.target.value)}></textarea><br />

          <button onClick={placeorder}>Order</button>
        </form>
      </div>
    </>
  )
}

export default ProductDetail
