import "./Popup.css";
import React, {useState} from "react";

const AddSandwich=(props)=>{
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");


    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };
    const addToServer = async(event) => {
        event.preventDefault(); //stops us from going to another page or refreshing
        setResult("Sending...");

        const formData = new FormData(event.target);
        console.log(...formData);
        
        const response = await fetch("http://localhost:3000/api/sandwiches", {
            "method":"POST",
            "body":formData
        });

        if(response.status == 200){
            setResult("Sandwich added successfully");
            event.target.reset();
            props.closeAddDialog();
            props.updateSandwiches(await response.json());
        } else {
            setResult("Error");
        }
    };

    return(
        <div className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                        <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeAddDialog}>
                             &times;
                        </span>
                        <form id="add-sandwich" onSubmit={addToServer}>
                            <h2>Create sandwich:</h2>
                            <p>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required min="3"></input>
                            </p>
                            <p>
                                <label htmlFor="name">Bread:</label>
                                <input type="text" id="bread" name="bread" required min="3"></input>
                            </p>
                            <p>
                                <label htmlFor="name">Toppings:</label><br/>
                                <input type="text" name="toppings[]" required min="3"></input><br/>
                                <input type="text" name="toppings[]" required min="3"></input><br/>
                                <input type="text" name="toppings[]" required min="3"></input>
                            </p>
                            <p>
                                <h4>Hot or Cold?</h4>
                                <input type="radio" id="hot" name="hot" value="true" />
                                <label for="html">Hot</label><br/>
                                <input type="radio" id="cold" name="hot" value="false" />
                                <label for="css">Cold</label><br/>
                            </p>
                            <p>
                                <section className="columns">
                                    <div>
                                        <p id="img-prev-section">
                                            {prevSrc!=""?
                                            (<img id="img-prev" src={prevSrc}></img>):
                                            ("")
                                            }
                                        </p>
                                    </div>
                                    <p id="img-upload">
                                        <label htmlFor="img">Upload Image:</label>
                                        <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} />
                                    </p>
                                </section>
                            </p>
                            <p>
                                <button type="submit">Submit</button>
                            </p>
                            <p>{result}</p>                    

                        </form>
                    
                </div>
            </div>
        </div>
    );
};

export default AddSandwich;