import React, {useState, useEffect} from "react";
import axios from "axios";
import "./css/Menu.css";
import Sandwich from ".././components/Sandwich";

const Menu=()=>{
    const [sandwiches, setSandwiches] = useState([]);
    useEffect(()=>{
        const loadSandwiches = async() => {
            const response = await axios.get("https://sub-stop-server.onrender.com/api/sandwiches");
            setSandwiches(response.data);
        };

        loadSandwiches();
    },[]);



    return(
        <main id="menu">
            <h1>Hot subs</h1>
            <div id="hot-menu" className="columns-mobile menu">
                {sandwiches.map((sandwich)=>{
                    if(sandwich.hot=="true"){
                        return <Sandwich name={sandwich.name} image={"https://sub-stop-server.onrender.com/"+sandwich.img} bread={sandwich.bread} toppings={sandwich.toppings} />
                    }
                })}
            </div>
            <h1>Cold subs</h1>
            <div id="cold-menu" className="columns-mobile menu">
               {sandwiches.map((sandwich)=>{
                    if(sandwich.hot=="false"){
                        return <Sandwich name={sandwich.name} image={"https://sub-stop-server.onrender.com/"+sandwich.img} bread={sandwich.bread} toppings={sandwich.toppings} />
                    }
                })}
            </div>
        </main>
    );
};

export default Menu;