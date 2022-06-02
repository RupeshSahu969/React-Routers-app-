import React from 'react'


import { Link,useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate =useNavigate();

const handleOnClick =(id) => {

  if(id === 1){
    navigate("/products/1")
  }
}
  return (
    <div>
    
      <Link to='/' >Home</Link>
      <Link to='/about' >About</Link>
      <Link to='/products' >Products</Link><br></br>
      
      <button onClick={() => handleOnClick(1)}>Go to Product1</button>
      <button onClick={() => handleOnClick(2)}>Go to Product2</button>
      </div>
  )
}

export default Navbar