import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <nav className="navbar navbar-toggleable-sm navbar-inverse bg-inverse">
            <div className="navbar-nav collapse navbar-collapse" id="header-nav">
                <Link className="navbar-brand" to="/">Home</Link>
                <Link className="nav-item nav-link" to="/games">Games</Link>
                <Link className="nav-item nav-link" to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;