import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({auth}) => {
    const authButton = auth ? (
        <a href="/api/logout">Log Out</a>
    ) :
    (
        <a href="/api/auth/google">LogIn</a> 
    )
    return (
        <nav>
            <div className="nav-wrapper">
            <a href="#" className="brand-logo">React SSR App</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/admins">Admins</Link></li>
                <li>{authButton}</li>
            </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = ({auth}) => {
    return {auth}
}

export default connect(mapStateToProps)(Header);

