import React, { useEffect } from 'react'
import Confetti from 'react-confetti'
import { useNavigate } from 'react-router-dom'

const Ordersuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 10000); 
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Confetti />
      <center>
        <h1>Order Placed Successfully 🎉</h1>
      </center>
    </>
  );
};

export default Ordersuccess;


// import React from 'react'
// import Confetti from 'react-confetti'

// const Ordersuccess = () => {
//   return (
//     <>
//     <Confetti/>
//     <center> <h1>Order placed Successfully</h1></center>
//     </>
//   )
// }

// export default Ordersuccess