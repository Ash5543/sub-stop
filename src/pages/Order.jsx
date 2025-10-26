import "./css/Order.css";
import Orderbox from ".././components/Orderbox";

const Order=()=>{
    return(
        <main>
            <div id="order">
                 <Orderbox name="Philly Cheesteak" image="images/sandwiches/philly.jpg" ingredients="Beef, Cheese, Onion" />
                <Orderbox name="Italian" image="images/sandwiches/italian.jpg" ingredients="Pepperoni, Salami, Lettuce" />
            </div>
        </main>
    );
};

export default Order;