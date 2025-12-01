import React, { useState } from "react";

const PopupEdit=(sandwich)=>{
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("https://sub-stop-server.onrender.com/" + sandwich.img);
    
    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const onSubmit = async(event) => {
        event.preventDefault();
        setResult("... sending");

        const formData = new FormData(event.target);
        console.log(...formData);

        const response = await fetch(`https://sub-stop-server.onrender.com/api/sandwiches/${sandwich._id}`,{
            method:"PUT",
            body:formData
        });

        if(response.status === 200) {
            setResult("Sandwich updated successfully");
            event.target.reset();
            sandwich.closeSandwich();
            sandwich.updateSandwich(await response.json());
        } else {
            setResult("Error edditing sandwich");
        }
    };

    return(
        <section>
            <form id="edit-form" onSubmit={onSubmit}>
                <h2>Edit sandwich:</h2>
                    <input type="hidden" name="_id" value={sandwich?._id || sandwich?.id || ""} />
                    <p>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required min="3" defaultValue={sandwich.name}></input>
                    </p>
                    <p>
                        <label htmlFor="name">Bread:</label>
                        <input type="text" id="bread" name="bread" required min="3" defaultValue={sandwich.bread}></input>
                    </p>
                    <p>
                        <label htmlFor="name">Toppings:</label><br/>
                        <input type="text" name="toppings[0]" required min="3"></input><br/>
                        <input type="text" name="toppings[1]" required min="3"></input><br/>
                        <input type="text" name="toppings[2]" required min="3"></input>
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
        </section>
    )
}

export default PopupEdit;