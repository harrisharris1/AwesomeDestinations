import React,{useContext} from "react";
import {NavLink} from "react-router-dom";
import CartContext from "../context/CartContext"

const Navigation =()=>{
    const cart = useContext(CartContext);
    return(
        <div className="nav">
            <NavLink to="/">Clothes</NavLink>
            <NavLink to="/cart">Cart <span>{cart.length}</span>
            </NavLink>
        </div>
    );
}

export default Navigation