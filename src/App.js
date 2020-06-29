import React, { useState } from 'react';
import {Route} from "react-router-dom";
import './App.css';
import data from "./data";



import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import ProductContext from "./context/ProductContext";
import CartContext from "./context/CartContext";
import Home from "./components/Home"

function App() {

  const [products] =useState(data);
  const [cart,setCart] =useState([]);
  const addItem =item =>{
    setCart([...cart,item])
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
			  <CartContext.Provider value={cart}>
	      	<div className="App">
		      	<Navigation/>
				  <Home/>
		        	{/* Routes */}
			
		      	<Route exact path="/" component={Products}/>
			      <Route path="/" component={ShoppingCart}/>
	      	</div>
	     	</CartContext.Provider>
		</ProductContext.Provider>
    
  );
}

export default App;
