import { Outlet, Link } from "react-router-dom";
import "./css/Layout.css"

const Layout=()=>{
    return(
        <>
            <header id="header">
                <h1>Sub Stop</h1>
                <nav id="main-nav">
                    <ul className="columns hide-small">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/order">Order</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/locations">Locations</Link></li>
                    </ul>
                </nav>
                <img id="logo" src="images/logo.jpg" alt="logo"></img>
            </header>

            <Outlet />
        </>
    );
};

export default Layout;