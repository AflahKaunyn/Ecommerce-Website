import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  let username = localStorage.getItem("username")
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get("http://localhost:3000/products")
    .then(x=>setProducts(x.data))
    .catch(err=>console.log(err))
  },[])

  function handleProduct(id){
      navigate(`/productdetails/${id}`)
  }

  const [category, setCategory] = useState('');
  const [search,setSearch]=useState('');

  const filteredProducts=products.filter((x)=>{
    const categoryMatch = category==='' || x.product_category===category
    const searchMatch=x.product_name.toLowerCase().startsWith(search.toLowerCase());
    return categoryMatch && searchMatch;
  })

function other(){
  setCategory('others')
  // navigate('/profile')
}

  return (
   <>
    <Navbar/>
    <center><h1>Welcome, {username}</h1></center>
  
      <input type="text" placeholder='🔍 Search product' className='search-input'
      value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
     
      <div className='search-btns'>
        {/* <button onClick={() => setCategory("")}>All</button> */}
        <button onClick={() => setCategory("Electronics")}>Electronics</button>
        <button onClick={() => setCategory("Groceries")}>Groceries</button>
        <button onClick={() => setCategory("Fashion")}>Fashion</button>
        <button onClick={() => setCategory("Sports")}>Sports</button>
        <button onClick={other}>Others</button>
      </div>
      
      <div className='products-container'> 
        {filteredProducts.length>0 ? (
        filteredProducts.map((x)=>(<div className='products'>
        <img src={x.product_image} height={"200px"} width={"200px"} alt={x.product_name} />
        <h3>{x.product_name}</h3>
        <p>₹{x.product_price}</p>
        <button id='view-btn' onClick={()=>{handleProduct(x.id)}}>View</button>
        </div>
       ))
      ) : <center><h1>No Products Found</h1></center>
        }
      </div>
  
   </>
  )
}

export default Dashboard



// import React, { useState, useEffect } from 'react'
// import Navbar from '../components/Navbar'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// const Dashboard = () => {
//   let username = localStorage.getItem("username")
//   const [products, setproducts] = useState([])
//   const navigate = useNavigate()
//   useEffect(() => {
//     axios.get("http://localhost:3000/products")
//       .then(x => setproducts(x.data))
//       .catch(err => console.log(err))
//   }, [])
//   function handleproduct(id) {
//     navigate(`/productdetails/${id}`)
//   }
// const [category, setCategory] = useState("");
// const [search, setSearch] = useState("");
// const filteredProducts = products.filter((x) => {
//   const categoryMatch =
//     category === "" || x.product_category === category;
//   const searchMatch =
//     x.product_name.toLowerCase().includes(search.toLowerCase());
//   return categoryMatch && searchMatch;
// });
//   return (
//     <>
//       <Navbar />
//       <center><h1>Welcome {username} </h1></center>
//       <input type="text" placeholder="🔍 Search" 
//       value={search} onChange={(e) => setSearch(e.target.value)}/>
    
//       <div className='search-btns'>
//         <button onClick={() => setCategory("")}>All</button>
//         <button onClick={() => setCategory("Electronics")}>Electronics</button>
//         <button onClick={() => setCategory("Groceries")}>Groceries</button>
//         <button onClick={() => setCategory("Fashion")}>Fashion</button>
//         <button onClick={() => setCategory("Sports")}>Sports</button>
//         <button onClick={() => setCategory("others")}>Others</button>

//       </div>
      
// <div className="products-container">
//   {filteredProducts.length > 0 ? (
//     filteredProducts.map((x) => (
//       <div className="products" key={x.id}>
//         <img
//           src={x.product_image}
//           width="200"
//           height="200"
//           alt={x.product_name}
//         />

//         <h3>{x.product_name}</h3>
//         <p>₹{x.product_price}</p>

//         <button onClick={() => handleproduct(x.id)}>
//           View
//         </button>
//       </div>
//     ))
//   ) : (
//     <h2>No Products Found</h2>
//   )}
// </div>

//     </>
//   )
// }

// export default Dashboard



// import React,{useState,useEffect} from 'react'
// import Navbar from '../components/Navbar'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// const Dashboard = () => {
//   let username = localStorage.getItem("username")
//   const [products, setProducts] = useState([])
//   const navigate = useNavigate()
//   useEffect(()=>{
//     axios.get("http://localhost:3000/products")
//     .then(x=>setProducts(x.data))
//     .catch(err=>console.log(err))
//   },[])

//   function handleProduct(id){
//       navigate(`/productdetail/${id}`)
//   }
//   return (
//    <>
//     <Navbar/>
//     <center><h1>Welcome, {username}</h1></center>
//     <div className="product-container">
//       {products.map((x)=>{
//       return <div className='product'>
//         <img src={x.product_image} height={"200px"} width={"200px"} alt="" />
//         <h3>{x.product_name}</h3>
//         <button id='view-btn' onClick={()=>{handleProduct(x.id)}}>View</button>
//       </div>
//     })}
//     </div>

//    </>
//   )
// }

// export default Dashboard