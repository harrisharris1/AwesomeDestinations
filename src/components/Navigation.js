import React,{useContext} from "react";
import {NavLink} from "react-router-dom";
import CartContext from "../context/CartContext"
import Plane from "../images/plane.png"




const Navigation =()=>{
    
    const cart = useContext(CartContext);
    return(
       
        <div className="nav">
            <img src={Plane} width="80px" alt="plane logo"></img>
            <NavLink to="/">More Destinations</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/cart">Cart <span>{cart.length}</span></NavLink>
        </div>
       
    );
}

export default Navigation