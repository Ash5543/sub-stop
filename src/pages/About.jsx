
import "./css/About.css";

const About=()=>{
    return(
        <main>
            <div className="columns about">
                <section>
                    <img src="images/subs.webp" alt="img"></img>
                </section>
                <section class="about-p">
                    <h1>About Us</h1>
                    <p>Sub Stop started as a simple idea between two friends who believed the best conversations happen over a really good sandwich. What began in a small kitchen—experimenting with fresh breads, bold flavors, and family recipes—quickly grew into a passion for creating subs that felt both comforting and exciting. With a dream to share those flavors with the community, we opened our doors to offer hearty hot subs, refreshing cold classics, and a welcoming place where everyone could feel at home.</p>
                </section>
            </div>
            <div className="columns about">
                <section class="about-p">
                    <h1>Our Mission</h1>
                    <p>At Sub Stop, we believe a great sandwich starts with fresh ingredients and a passion for flavor. Every sub we serve is crafted to satisfy—whether you’re craving something hot, hearty, and melty or cool, crisp, and refreshing. We’re more than just a sandwich shop; we’re a place where quality, convenience, and community come together. Stop in, grab a seat, and taste the difference that keeps our guests coming back.</p>
                </section>
                <section>
                    <img src="images/deli.jpg" alt="img"></img>
                </section>
            </div>
        </main>
    );
};

export default About;