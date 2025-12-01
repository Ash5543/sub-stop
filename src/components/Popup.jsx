import "./Popup.css";
import React, { useState } from "react";
import PopupDetails from "./PopupDetails";
import PopupEdit from "./PopupEdit";
import PopupDelete from "./PopupDelete";


const Popup=(sandwich)=>{
    const [showContent, setShowContent] = useState("details");

    const showEdit = (e) => {
        e.preventDefault();
        setShowContent("edit");
    }

    const showDelete = (e) => {
        e.preventDefault();
        setShowContent("delete");
    }
    return(
        <div className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                        <span id="dialog-close" className="w3-button w3-display-topright" onClick={sandwich.closeSandwich}>
                             &times;
                        </span>
                        <div id="popup-content">
                            {showContent==="details"?(
                                <PopupDetails
                                    showEdit={showEdit}
                                    showDelete={showDelete}
                                    name={sandwich.name}
                                    bread={sandwich.bread}
                                    toppings={sandwich.toppings}
                                    price={sandwich.price} />
                            ):showContent==="edit"?(
                                <PopupEdit
                                    _id={sandwich._id}
                                    name={sandwich.name}
                                    bread={sandwich.bread}
                                    toppings={sandwich.toppings}
                                    price={sandwich.price}
                                    hot={sandwich.hot}
                                    closeSandwich={sandwich.closeSandwich}
                                    updateSandwich={sandwich.updateSandwich}
                                    img={sandwich.img}/>
                            ):(
                                <PopupDelete 
                                    _id={sandwich._id}
                                    name={sandwich.name}
                                    closeDelete={sandwich.closeSandwich}
                                    hide={sandwich.hide}/>
                            )}
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Popup;