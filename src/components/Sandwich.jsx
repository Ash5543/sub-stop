import React, {useState, useEffect} from "react";
import "./Sandwich.css";

const Sandwich=(sandwich)=>{
    return(
        <section className="menu-option">
            <img src={sandwich.image} alt={sandwich.name}></img>
            <h3>{sandwich.name}</h3>
        </section>
    );
};

export default Sandwich;