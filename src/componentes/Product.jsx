import React from 'react'
import {useParams} from "react-router-dom"
import { useState } from 'react';
import { useEffect } from 'react';
const Product = () => {

  const [Product,setProduct] =useState([])
const {id} =useParams();

useEffect(() => {

  if(id){
    fetch(`http://localhost:8080/products/${id}`)
    .then((r) => r.json())
    .then((d) => setProduct(d));

  }
},[id]);

  return (
    <div>
        
        Product Id:{id}
<div>{Product.name}</div>        
        </div>
  )
}

export default Product