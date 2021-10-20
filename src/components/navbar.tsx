import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

interface Props {
    currPage: string;
}

const NavBar: React.FC<Props> = ({currPage}) => {
    return(
        <div className="navbar-container">
            <div className="logo">Logo</div>
            <div className="nav-content">
                <p className="nav-item"><Link to="/">Home</Link></p>
                <p className="nav-item"><Link to="/settings">Settings</Link></p>
                <p className="nav-item"><Link to="/help">Help</Link></p>
            </div>
        </div>
    );
};

export default NavBar;