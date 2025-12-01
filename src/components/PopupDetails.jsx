import "./Popup.css";

const PopupDetails=(sandwich)=>{
    return(
        <section>
            <div className="columns">
                <h1 >{sandwich.name}</h1>
                <section id="edit-links">
                    <a className="edit-delete" href="edit-link" onClick={sandwich.showEdit}>&#9998;</a>
                    <a className="edit-delete" href="delete-link" onClick={sandwich.showDelete}>&#x2715;</a>
                </section>
            </div>
            <h4 className="padding">{sandwich.bread}</h4>
            {sandwich.toppings && sandwich.toppings.map((topping, index) => (
            <section key={index} className="padding">
                <input type="checkbox" id={`topping-${index}`} />
                <label htmlFor={`topping-${index}`}>{topping}</label>
            </section>
            ))}
            <h4 className="padding">{sandwich.price}</h4>
        </section>
    );
}

export default PopupDetails;