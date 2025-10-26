import "./css/Home.css";
import Option from ".././components/Option";

const Home=()=>{
    return(
        <main>
            <div id="intro" className="columns">
                <section>
                    <img id="intro-img" src="images/intro-img.jpg" alt="sub"></img>
                </section>
                <section id="intro-p">
                    <h2>Become a member today!</h2>
                    <p>Join our Sub Stop family today and take your love for fresh, delicious sandwiches to the next level! As a member, you'll enjoy exclusive deals, early access to new menu items, and special rewards just for you. Signing up is quick, easy, and free—so why wait? Treat yourself to the subs you crave and let every bite be part of something special.</p>
                </section>
            </div>
            <div id="options" class="columns-mobile">
                <Option name="Menu" image="images/lettuce.jpg" />
                <Option name="About" image="images/tomato.jpg" />
                <Option name="Order" image="images/cheese.jpg" />
                <Option name="Locations" image="images/meat.png" />
            </div>
        </main>
    );
};

export default Home;