import React from 'react'
import{Routes,Route} from "react-router-dom"
import Homepage from './pages/Homepage'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProductDetail from './pages/ProductDetail'
import Product_detail from './pages/Product_detail'
import Ordersuccess from './pages/Ordersuccess'
import Orderhistory from './pages/Orderhistory'
import Profile from './pages/Profile'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/productdetails/:id' element={<ProductDetail/>}/>
      <Route path='/success' element={<Ordersuccess/>}/>
      <Route path='/myorders' element={<Orderhistory/>}/>
      <Route path='/profile/:id' element={<Profile/>}/>
    </Routes>
  
    </>
  )
}
export default App