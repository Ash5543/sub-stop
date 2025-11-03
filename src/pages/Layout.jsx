import { Outlet, Link } from "react-router-dom";
import "./css/Layout.css"
import {useState} from "react";

const Layout=()=>{
    const [menuOpen, setMenuOpen] = useState(false);
    const[downArrow, setDownArrow] = useState(true);

    const toggleMenu=()=>{
        setMenuOpen(!menuOpen); 
        setDownArrow(!downArrow);
    }




    return(
        <>
            <header id="header">
                <h1>Sub Stop</h1>
                <p onClick={toggleMenu} id="togglenav" href="#">
                    {downArrow?(<p>&darr;</p>):(<p>&uarr;</p>)}
                </p>
                <nav id="main-nav" className={menuOpen?"":"hide-small"}>
                    <ul className="columns">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/order">Order</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/locations">Locations</Link></li>
                    </ul>
                </nav>
                <img id="logo" src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="logo"></img>
            </header>

            <Outlet />
        </>
    );
};

export default Layout;