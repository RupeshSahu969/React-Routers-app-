import React from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import Products from "./componentes/Products"
import About from "./componentes/About"

import Home from "./componentes/Home"
import { Routes, Route, Link } from "react-router-dom";
import Product from './componentes/Product';

function App() {
  return (
    <div className="App">
     
<Navbar/>
<Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products/*" element={<Products />} >
        <Route path=":id" element={<Product />} />
        </Route>
      
      </Routes>







{/* <Home/>
<About/>
<Products/> */}

    </div>
  );
}

export default App;
