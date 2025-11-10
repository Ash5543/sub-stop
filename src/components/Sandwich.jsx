import React, {useState, useEffect} from "react";
import "./Sandwich.css";
import Popup from "../components/Popup";

const Sandwich=(sandwich)=>{
    const [showDialog, setShowDialog] = useState(false);
    const showSandwich = () => {
        setShowDialog(true);
    }

    const closeSandwich = () => {
        setShowDialog(false);
    }
    return(
       <>
            {showDialog?(
                <Popup closeSandwich={closeSandwich} 
                    name={sandwich.name}
                    bread={sandwich.bread}
                    toppings={sandwich.toppings}/>
            ):("")}
            <section className="menu-option" onClick={showSandwich}>
                <img src={sandwich.image} alt={sandwich.name}></img>
                <h3>{sandwich.name}</h3>
            </section>
       </>
            
    );
};

export default Sandwich;