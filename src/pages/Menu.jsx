import React, {useState, useEffect} from "react";
import axios from "axios";
import "./css/Menu.css";
import Sandwich from ".././components/Sandwich";
import AddSandwich from "../components/AddSandwich";

const Menu=()=>{
    const [sandwiches, setSandwiches] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);
    //do the adddialogstuff

    const openAddDialog=()=>{
        setShowAddDialog(true);
    }
    const closeAddDialog=()=>{
        setShowAddDialog(false);
    }
    const updateSandwiches = (sandwich) => {
        setSandwiches((sandwiches)=>[...sandwiches, sandwich]);
    };

    useEffect(()=>{
        const loadSandwiches = async() => {
            const response = await axios.get("https://sub-stop-server.onrender.com/api/sandwiches"); 
            setSandwiches(response.data);
        };

        loadSandwiches();
    },[]);

    

    return(
        <main id="menu">
            {showAddDialog?(
                <AddSandwich closeAddDialog={closeAddDialog} updateSandwiches={updateSandwiches}/>
            ):("")}
            <button id="make-sandwich" onClick={openAddDialog}>+</button>
            <h1>Hot subs</h1>
            <div id="hot-menu" className="columns-mobile menu">
                {sandwiches.map((sandwich)=>{
                    if(sandwich.hot=="true"){
                        return <Sandwich name={sandwich.name} image={"https://sub-stop-server.onrender.com/"+sandwich.img} bread={sandwich.bread} toppings={sandwich.toppings} price={sandwich.price} _id={sandwich._id} hot={sandwich.hot}/>
                    }
                })}
            </div>
            <h1>Cold subs</h1>
            <div id="cold-menu" className="columns-mobile menu">
               {sandwiches.map((sandwich)=>{
                    if(sandwich.hot=="false"){
                        return <Sandwich name={sandwich.name} image={"https://sub-stop-server.onrender.com/"+sandwich.img} bread={sandwich.bread} toppings={sandwich.toppings} price={sandwich.price} _id={sandwich._id} hot={sandwich.hot}/>
                    }
                })}
            </div>
        </main>
    );
};

export default Menu;