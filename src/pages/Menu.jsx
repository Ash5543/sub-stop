import "./css/Menu.css";
import Sandwich from ".././components/Sandwich";

const Menu=()=>{
    return(
        <main id="menu">
            <h1>Hot subs</h1>
            <div id="hot-menu" className="columns-mobile menu">
                <Sandwich name="Philly Cheesteak" image="images/sandwiches/philly.jpg" />
                <Sandwich name="Meatball Sub" image="images/sandwiches/meatball.jpg" />
                <Sandwich name="Buffalo Chicken" image="images/sandwiches/buffalo.jpg" />
                <Sandwich name="Cuban Sandwich" image="images/sandwiches/cuban.jpg" />
            </div>
            <h1>Cold subs</h1>
            <div id="cold-menu" className="columns-mobile menu">
               <Sandwich name="Italian" image="images/sandwiches/italian.jpg" />
                <Sandwich name="Turkey" image="images/sandwiches/turkey.jpg" />
                <Sandwich name="Ham" image="images/sandwiches/ham.jpg" />
                <Sandwich name="Chicken Salad" image="images/sandwiches/chickensalad.jfif" /> 
            </div>
        </main>
    );
};

export default Menu;