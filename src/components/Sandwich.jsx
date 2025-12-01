import React, {useState, useEffect} from "react";
import "./Sandwich.css";
import Popup from "../components/Popup";

const Sandwich=(sandwich)=>{
    const [sandwichupdate, setSandwich] = useState(sandwich);
    const [show, setShow] = useState(true);
    const [showDialog, setShowDialog] = useState(false);
    const showSandwich = () => {
        setShowDialog(true);
    }

    const closeSandwich = () => {
        setShowDialog(false);
    }

    const updateSandwich = (sandwichupdate) =>{
        setSandwich(sandwichupdate);
    }

    const hide =()=>{
        setShow(false);
    }

    return(
       <>
            {showDialog?(
                <Popup closeSandwich={closeSandwich} 
                    _id={sandwich._id}
                    name={sandwich.name}
                    bread={sandwich.bread}
                    toppings={sandwich.toppings}
                    price={sandwich.price}
                    hot={sandwich.hot}
                    updateSandwich={updateSandwich}
                    hide={hide}
                    img={sandwich.image}/>
            ):("")}
            {show?(
                <section className="menu-option" onClick={showSandwich}>
                    <img src={sandwich.image} alt={sandwich.name}></img>
                    <h3>{sandwich.name}</h3>
                </section>
            ):("")}
       </>
            
    );
};

export default Sandwich;