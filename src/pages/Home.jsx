import "./css/Home.css";
import Option from ".././components/Option";
import Slideshow from ".././components/Slideshow";
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <main>
            <div id="intro" className="columns">
                <section>
                    <Slideshow />
                </section>
                <section id="intro-p">
                    <h2>Become a member today!</h2>
                    <p>Join our Sub Stop family today and take your love for fresh, delicious sandwiches to the next level! As a member, you'll enjoy exclusive deals, early access to new menu items, and special rewards just for you. Signing up is quick, easy, and free—so why wait? Treat yourself to the subs you crave and let every bite be part of something special.</p>
                </section>
            </div>
            <div id="options" class="columns-mobile">
                <Link className="link" to="/menu">
                    <Option name="Menu" image={`${process.env.PUBLIC_URL}/images/lettuce.jpg`} />
                </Link>
                <Link className="link" to="/about">
                    <Option name="About" image={`${process.env.PUBLIC_URL}/images/tomato.jpg`} />
                </Link>
                <Link className="link" to="/order">
                    <Option name="Order" image={`${process.env.PUBLIC_URL}/images/cheese.jpg`} />
                </Link>
                <Link className="link" to="/locations">
                    <Option name="Locations" image={`${process.env.PUBLIC_URL}/images/meat.png`} />
                </Link>
               
            </div>
        </main>
    );
};

export default Home;