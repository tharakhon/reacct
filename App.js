import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './Posts';
import About from './About';
import Home from './Home';
import Product from './Product';

import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
function App() {
  const [productState,setProductState]=useState({
    product_list:[
            {id:1, name:'ASUS 4GB ROG STRIX GTX1050TI O4G GAMING',price:13275,count:0},
            {id:2, name:'ZOTAC GAMING GEFORCE GTX 1650 4GB GDDR6',price:6690,count:0},
            {id:3, name:'RTX2080TI 11GB GIGABYTE GAMING (OC/D6)',price:44900,count:0},
            {id:4, name:'GIGABYTE GEFORCE RTX 3050 GAMING OC 8GB GDDR6',price:13500,count:0},
            {id:5, name:'GIGABYTE GEFORCE RTX 3090 GAMING OC 24GB GDDR6',price:52900,count:0},
            {id:6, name:'VGA GALAX GEFORCE RTX 2060 PLUS OC 12GB GDDR6',price:10355,count:0},
            {id:7, name:'ASUS ROG STRIX GEFORCE RTX 3050 8GB OC Edition GDDR6',price:15900,count:0},
            {id:8, name:'MSI GeForce RTX 3070 Gaming Z Trio 8GB GDDR6 (LHR)',price:27900,count:0},
            {id:9, name:'ASUS 6GB RTX2060 ROG STRIXO6G',price:14900,count:0},
            {id:10, name:'ZOTAC GAMING GEFORCE GTX 1660TI 6GB GDDR6',price:8490,count:0}
        ]
    });


  return (
    <BrowserRouter>
       <div>
        <ul>
          
        </ul>
        </div>
        <Routes>
            
            <Route path="/" element={<Product product={productState} setproduct={setProductState}/>}/>
            <Route path="posts/:id" element={<Posts product={productState} setproduct={setProductState}/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </BrowserRouter>
  );
}
export default App;