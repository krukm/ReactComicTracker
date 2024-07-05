import './NavBar.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Hamburger from '../Images/Hamburger'


export const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
      }

    return(
        <nav className="navbar">
            <div className='container'>
                <div className="title">
                    Comic Collector
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger />
                </div>
                <div className={`nav-elements ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/myCollection">My Collection</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}