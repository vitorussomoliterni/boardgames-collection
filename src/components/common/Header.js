import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <nav className="navbar navbar-inverse bg-inverse navbar-toggleable-md">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/games">Games</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;