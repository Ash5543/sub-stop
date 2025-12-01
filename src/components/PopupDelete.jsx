import React, { useState } from "react"

const PopupDelete=(sandwich)=>{
    const [result, setResult] = useState("");

    const deleteSandwich = async() => {
        const response = await fetch(`https://sub-stop-server.onrender.com/api/sandwiches/${sandwich._id}`, {
            method:"DELETE"
        });

        if(response.status === 200) {
            setResult("Sandwich successfully delete");
            sandwich.closeDelete();
            sandwich.hide();
        } else {
            setResult("Sorry, we couldn't delete the sandwich");
        }

    };
    return(
        <div id="delete-content">
            <h3>Are you sure you want to delete the {sandwich.name}?</h3>
            <section>
              <button onClick = {sandwich.closeDelete}>No</button>            
              <button onClick={deleteSandwich}>Yes</button>
            </section>
            <span>{result}</span>
        </div>
    )
}

export default PopupDelete;