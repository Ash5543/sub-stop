import "./Orderbox.css";

const Orderbox=(sandwich)=>{
    return(
        <section className="sandwich columns">
            <img src={sandwich.image} alt={sandwich.name}></img>
            <div className="sandwich-p">
                <h2>{sandwich.name}</h2>
                <p>{sandwich.ingredients}</p>
                <button className="edit-btn">Edit</button>
            </div>
            <div className="number">
                <input type="number" min="0" max="99"></input>
            </div>
        </section>
    );
};

export default Orderbox;