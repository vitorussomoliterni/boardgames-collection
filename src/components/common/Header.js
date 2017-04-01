import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <nav className="navbar navbar-toggleable-sm navbar-inverse bg-inverse">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header-nav" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-nav collapse navbar-collapse" id="header-nav">
                <Link className="navbar-brand" to="/">Home</Link>
                <Link className="nav-item nav-link" to="/games">Games</Link>
                <Link className="nav-item nav-link" to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;