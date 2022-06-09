import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <h1> This is navigation Bar</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to='/Home'>Home</Link></li>
                    <li><Link to='/Projects'>My Projects</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Blog'>Blog</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;