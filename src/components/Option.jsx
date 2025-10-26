import "./Option.css";

const Option=(option)=>{
    return(
        <section id="option" class="option">
            <img src={option.image} alt={option.name}></img><br></br>
            <h2>{option.name}</h2>
        </section>
    );
};

export default Option;