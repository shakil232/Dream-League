
import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus  } from '@fortawesome/free-solid-svg-icons';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return (
        <div className="text-center mt-1 p-2  head-container">
            <nav>
                <a className="logo" href="logo">Dream-<span className="pro">11</span>Pro</a>
                <a href="Home"> Home</a>
                <a href="Review">Select Player Review</a>
                <a href="Manage">Manage</a>
                <FontAwesomeIcon className="icon" icon={faCartPlus} />
            </nav>

        </div>
    );
};

export default Header;