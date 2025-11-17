import "./Popup.css";

const Popup=(sandwich)=>{
    return(
        <div className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                        <span id="dialog-close" className="w3-button w3-display-topright" onClick={sandwich.closeSandwich}>
                             &times;
                        </span>
                        <h1 >{sandwich.name}</h1>
                        <h4 className="padding">{sandwich.bread}</h4>
                        {sandwich.toppings && sandwich.toppings.map((topping, index) => (
                        <section key={index} className="padding">
                            <input type="checkbox" id={`topping-${index}`} />
                            <label htmlFor={`topping-${index}`}>{topping}</label>
                        </section>
                        ))}
                    
                </div>
            </div>
        </div>
    );
};

export default Popup;