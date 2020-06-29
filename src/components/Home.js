import React from "react";
import {NavLink} from "react-router-dom";


const Home =()=>{

    return(
        <div className="Home-page">
            <div className="HomeContainer">
               
                <h1>Welcome to the little shop</h1>
            </div>
            <NavLink to="/">Clothes</NavLink>
        </div>
    );
}

export default Home