
import React from 'react';
import './Header.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return (
        <div className="text-center mt-1 p-2  head-container">
            <nav>
                <a className="logo" href="logo">Dream-<span className="pro">11</span>Pro</a>
                <a href="Home"> Home</a>
                <a href="Review">Select Player Review</a>
                <a href="Manage">Manage</a>
                
            </nav>

        </div>
    );
};

export default Header;