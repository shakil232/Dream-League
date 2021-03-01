
import React from 'react';
import './Header.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return (
        <div className="text-center mt-1 p-2  head-container">
            <nav>
                <a className="logo" href="logo">Dream League<span className="pro">Soccer</span></a>
                <a href="Home"> Players</a>
                <a href="Review">Select Player Review</a>
                <a href="contact">Contact</a>
                
            </nav>

        </div>
    );
};

export default Header;