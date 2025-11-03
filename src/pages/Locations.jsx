import "./css/Locations.css";
import Contact from "./../components/Contact";


const Locations=()=>{
    return(
        <main>
            <div id="location" class="columns">
                <section id="map">
                    <iframe id="map" title="map" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26463.692897137204!2d-81.02543361343784!3d33.993519766861624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSubway!5e0!3m2!1sen!2sus!4v1760645694862!5m2!1sen!2sus"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </section>
                <section id="form">
                    <h2>Contact us:</h2>
                    <Contact />
                </section>
            </div>
        </main>
    );
};

export default Locations;