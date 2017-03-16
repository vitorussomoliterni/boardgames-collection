import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Header;